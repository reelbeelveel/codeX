const express = require('express');
const fs = require(fs).promise;
const joi = require('@hapi/joi');
const mysql = require('../../sqlHandler');
const path = require('path');
const puppeteer = require('puppeteer');
const router = express.Router();
const syntaxEngine = require('../../engine');

const tokenLength = 22;
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
                    
                    const hexBlob = await fs.readFile(
                        path.join(__dirname, `/../../exports/${value.reqId}.png`), 
                        {encoding: 'hex'}
                    );
                    // Create Exports Entry
                    try {
                        var query = [];
                        query[0] = `DELETE FROM exports WHERE id = '${value.reqId}';`;
                        query[1] = `DELETE FROM images WHERE id = '${value.reqId}';`;

                        query[2] =
                            "INSERT INTO exports (" +
                            " id, " +
                            " timestamp, " +
                            " code_type, " +
                            " engine_type, " +
                            " plaintext, " +
                            " lifetime, " +
                            " types " +
                            ") VALUES (" +
                            ` '${value.reqId}', ` +
                            ` ${Date.now()}, ` +
                            ` '${value.type.substring(4)}', ` +
                            ` '${value.type.slice(0,4)}', ` +
                            ` '${req.body.replace(/'/g, "\\'").replace(/"/g, "`\"")}', ` +
                            " 0, " + // TODO: Implement serious lifetime
                            '{ "image": true }' +
                            ");";

                        query[3] =
                            "INSERT INTO images (" +
                            " id, " +
                            " data, " +
                            " sheet " +
                            ") VALUES (" +
                            ` '${value.reqId}', ` +
                            ` '${hexBlob}', ` +
                            ` '${sheet}', ` +
                            ");";
                        var result = [];
                        query.forEach(async(q) => {
                            const r = await mysql.sqlQuery(q);
                            result.push(r);
                        })
                        console.table({result, query});
                        res.status(200).send(value.reqId).end();
                    } catch (err) {
                        console.log(err);
                        throw new Error(`Could not add page: ${err}`);
                    }
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
