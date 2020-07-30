const express = require('express');
const joi = require('@hapi/joi');
const mysql = require('../../sqlHandler');
const path = require('path');
const puppeteer = require('puppeteer');
const router = express.Router();
const syntaxEngine = require('../../engine');
require('dotenv/config');

const tokenLength = process.env.TK_LEN;
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

router.post('/:type/:args/:style/:reqId', async (req, res) => {
    // Validate schema, Check Parameters.
    try {
        const value = await schema.validateAsync(req.params);
        if (req.body == "" | req.body == undefined | req.body == null) throw new Error('Nothing to Highlight!');
        else console.log(req.body);
        switch (value.args) {
            case 'img': {
                try {
                    // Get output from syntax engine, req type/body.
                    // Get stylesheet filename for screenshot
                    // launch puppeteer, then newPage() to screenshot our HTML
                    var codeExport = await syntaxEngine(value.type, req.body);
                    const sheet = value.style;
                    const browser = await puppeteer.launch({headless: true, args:['--no-sandbox']});
                    const page = await browser.newPage();

                    // Set our page's content (template as desired) + styleheet (from request, or default)?
                    // TODO: vvv ADD WATERMARK TO IMAGE USING TEMPLATE HTML vvv
                    await page.setContent(`<html><pre><code class="hljs">${codeExport}</code></pre></html>`);
                    await page.addStyleTag({path: path.join(__dirname, `/../../pagesource/css/${sheet}`)})
                    await page.screenshot({path: path.join(__dirname, `/../../exports/${value.reqId}.png`)});
                    // Create Exports Entry
                    try {
                        var query = [];
                        query[0] = 
                            "INSERT INTO images (" +                
                            " id, " + 
                            " path, " + 
                            " plaintext, " +
                            " style, " + 
                            " engine_type, " +
                            " code_type " +
                            ") VALUES (" +
                            ` '${value.reqId}', ` +
                            ` '${value.reqId}.png', ` +
                            ` '${req.body.replace(/'/g, "\\'").replace(/"/g, "`\"")}', ` +
                            ` '${sheet}', ` + 
                            ` '${value.type.slice(0,4)}', ` +
                            ` '${value.type.substring(4)}' ` +
                            ");";
                        query[1] = 
                            "INSERT INTO exports (" +
                            " id, " +
                            " timestamp, " +
                            " plaintext, " +
                            " engine_type, " +
                            " code_type, " +
                            " lifetime, " +
                            " export_type " +
                            ") VALUES (" + 
                            ` '${value.reqId}', ` +
                            ` ${Date.now()}, ` +
                            ` '${req.body.replace(/'/g, "\\'").replace(/"/g, "`\"")}', ` +
                            ` '${value.type.slice(0,4)}', ` +
                            ` '${value.type.substring(4)}', ` +
                            " 0, " + // TODO: Implement serious lifetime
                            " 'images' " +
                            ");";
                        var result = [];
                        result[0] = await mysql.sqlQuery(query[0]);
                        result[1] = await mysql.sqlQuery(query[1]);
                        console.log(result);
                        res.status(200).send(value.reqId).end();
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
                break;
            }
            default: {
                throw new Error('Invalid arguments.');
            }
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad Request,\n${err}`).end();
    }
});

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
