const constante = require('./constants');
const express = require('express');
const joi = require('@hapi/joi');
const mysql = require('../../sqlHandler');
const path = require('path');
const puppeteer = require('puppeteer');
const router = express.Router();
const syntaxEngine = require('../../engine');
const tokenLength = constante.tkLen;

const schema = joi.object({
    type: joi.string()
    .min(4)
    .required(),
    args: joi.string()
    .required(),
    style: joi.string()
    .required(),
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
});
const idSchema = joi.object({
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
});

router.post('/:type/:args/:style/:reqId', async (req, res) => {
    // Validate schema, Check Parameters.
    try {
        const value = await schema.validateAsync(req.params);
        if (req.body == "" | req.body == undefined | req.body == null) throw new Error('Nothing to Highlight!');
        else console.log(req.body);
        try {
            // Get output from syntax engine, req type/body.
            var codeExport = await syntaxEngine(value.type, req.body);
            // Get stylesheet filename for screenshot
            const sheet = value.style;
            // launch puppeteer, then newPage() to screenshot our HTML
            const browser = await puppeteer.launch({headless: true, args:['--no-sandbox']});
            const page = await browser.newPage();

            // Set our page's content (template as desired) + styleheet (from request, or default)?
            // TODO: vvv ADD WATERMARK TO IMAGE USING TEMPLATE HTML vvv
            await page.setContent(`<html><pre><code class="hljs">${codeExport}</code></pre></html>`);
            await page.addStyleTag({path: path.join(__dirname, `/../../pagesource/css/styles/${sheet}`)})
            await page.screenshot({path: path.join(__dirname, `/../../exports/${value.reqId}.png`)});
            // Create Exports Entry
            try {
                const query = `INSERT INTO images (
                    id,
                    path,
                    plaintext,
                    style,
                    engine_type,
                    code_type
                ) VALUES (
                    '${value.reqId}',
                    '${value.reqId}.png',
                    '${req.body}',
                    '${sheet}',
                    '${value.type.slice(0,4)}',
                    '${value.type.substring(4)}'
                );`;
                var result = mysql.sqlQuery(query); 
                console.log(result);
                res.status(200).send(result).end();
            } catch (err) {
                console.log(err);
                throw new Error(`Could not add page: ${err}`);
            }
            // XXX Replace ->Send screenshot file back
            // res.status(200).sendFile(`${value.reqId}.png`, { root: path.join(__dirname, '../../exports') });
            //
            // TODO: Send Export entry back for browser to view

        } catch (err) {
            console.log(err);
            throw new Error(`Could not Export: ${err}`);
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad Request,\n${err}`).end();
    }
});
router.get('/:reqId', async (req, res) => {
    try {
        // TODO: Validate ID (JOI)
        const value = await idSchema.validateAsync(req.params);
        const query = `SELECT path
        FROM images
        WHERE id = '${value.reqId}';`;
        const sqlResult = await mysql.sqlQuery(query);
        if (sqlResult[0] == null || sqlResult[0] == undefined) throw new Error('No defined path for export.');
        const filename = result[0];
        // TODO: Return image
        res.status(200).sendFile(`${fileName}`, { root: path.join(__dirname, '../../exports') });
    } catch (err) {
        // TODO ^^^^^^^^ ERRS from any of these ^^^^
        res.status(400).send(`ERROR: ${err}`);
    }
}
)

//TODO new route handlers for get etc

router.post('/', (req, res) => {
    res.status(400)
        .send('Bad Request, did not specify type/args/style/id.')
        .end();
});
router.all('/', (req, res) => {
    res.status(400)
        .send('Bad Request. /api/export only supports \'POST\'.')
        .end();
});

module.exports = router;
