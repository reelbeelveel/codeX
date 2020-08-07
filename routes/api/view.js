// Script modified: Mon August 03, 2020 @ 07:18:01 EDT
const express = require('express');
const fs = require('fs').promises;
const joi = require('@hapi/joi');
const mysql = require('../../sqlHandler');
const path = require('path');
const puppeteer = require('puppeteer');
const router = express.Router();

const tokenLength = 22;

const argSchema = joi.object({
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required(),
    arg: joi.string()
    .token()
});

router.get('/:reqId/:arg?', async (req, res) => {
    try {
        const value = await argSchema.validateAsync(req.params);
        if (value.arg == undefined) value.arg = 'img';
        var fileName = undefined;
        console.log(`[/api/view.js] Valid GET request.`);
        switch(value.arg) {
            case 'img': {
                // setup necessary sql queries, 
                var query =
                "SELECT style AS sheet, highlight " +
                "FROM images i " +
                "JOIN exports e " +
                "ON i.id = e.id " +
                `WHERE i.id = '${value.reqId}' ` +
                "LIMIT 2;";

                var sql = await mysql.sqlQuery(query);
                const sheet = sql.result[0].sheet;
                const highlight = sql.result[0].highlight;
                if (highlight == undefined || highlight == null || highlight == "") throw new Error(`No content defined for the identifier: ${value.reqId}`);
                if (sheet == undefined || sheet == null || sheet == "") throw new Error(`No sheet defined for the identifier: ${value.reqId}`);
                const browser = await puppeteer.launch({headless: true, args:['--no-sandbox']});
                const page = await browser.newPage();

                // Set our page's content (template as desired) + styleheet (from request, or default)?
                let content = '<html class="hljs">' +
                '<pre id="bounding" style="margin: 0; padding: 0; position: fixed; top: 0; left: 0; font-size: larger;" class="hljs">' +
                '<code class="hljs" style="padding: 2em 2em 2em 2em; margin-bottom: 3em;">' +
                `${highlight}` +
                '</code><br style="padding: 2em;"><div id="watermark" style="display: block; background-color: #122a40; position: absolute; bottom: 8px; right: 8px; border: 2px solid #f78764; color: #b8336a; padding: 0.5em 1em 1.5em 0.5em; width: fit-content; height: fit-content; font-size: medium; border-radius: 20px;" align="right">' +
                '<img src="http://localhost:3000/Resources/openbracket.png" style="height: 2em; position: relative; transform: translate(0%, 35%);"/>' +
                `codexapp.co/v?id=${value.reqId}` +
                '<img src="http://localhost:3000/Resources/closebracket.png" style="height: 2em; position: relative; transform: translate(0%, 35%);"/>' +
                '</div></pre></html>';
                await page.setContent(content);                
                await page.addStyleTag({path: path.join(__dirname, `/../../pagesource/css/${sheet}`)});
                var { width, height } = await (await page.$('pre')).boundingBox();
                if(width <= 800 && height <= 600) await page.setViewport({width: 800, height: 600});
                else if(width <= 2000 && height <= 10000) await page.setViewport({ width: 2000, height: 10000 });
                else {
                    width = 2000;
                    height = 10000;
                    content = '<html class="hljs">' +
                        '<div style="position: fixed:, top: 0; left: 0; background-color: red; color: white; font-size: x-large; font-weight: bold;">' +
                        'ERROR: This output exceeds the current limit of 2000x10000px. It has been cropped to fit this limit. Consider breaking your code up into several snippets.' +
                        '</div>' +
                        '<pre id="bounding" style="margin: 0; padding: 0; position: fixed; top: 0; left: 0; font-size: larger;" class="hljs">' +
                        '<code class="hljs" style="padding: 2em 2em 2em 2em;">' +
                        `${highlight}` +
                        '</code></pre><br style="padding: 2em;"><div id="watermark" style="background-color: #122a40; position: absolute; bottom: 8px; right: 8px; border: 2px solid #f78764; color: #b8336a; padding: 0.5em 1em 1.5em 0.5em; width: fit-content; height: fit-content; font-size: large; border-radius: 20px;" align="right">' +
                        '<img src="http://localhost:3000/Resources/openbracket.png" style="height: 2em; position: relative; transform: translate(0%, 35%);"/>' +
                        `codexapp.co/v?id=${value.reqId}` +
                        '<img src="http://localhost:3000/Resources/closebracket.png" style="height: 2em; position: relative; transform: translate(0%, 35%);"/>' +
                        '</div></html>';
                    await page.setContent(content);
                    await page.setViewport({ width: 2000, height: 10000 });
                }
                await page.addStyleTag({path: path.join(__dirname, '/../../pagesource/css/snippet.css')});
                await page.screenshot({path: path.join(__dirname, `/../../exports/${value.reqId}.png`), clip: { x: 0, y: 0, width, height}, defaultViewport: null});
                await page.close();
                await browser.close();
                fileName = `${value.reqId}.png`;
            }
                break;
            default: {
                throw new Error('Invalid args');
            }
        }
        if (fileName === undefined) throw new Error(`The specified ID ${value.reqId} did not produce a valid filename.`);
        res.status(200).sendFile(`${fileName}`, { root: path.join(__dirname, '../../exports') }, async (err) => {
            if (err) throw err;
            else {
                try {
                    //    await fs.unlink(path.join(__dirname, `/../../exports/${fileName}`));
                    console.log("send and unlink finished");
                } catch (err) {
                    console.log(`ERROR WHILE TRYING TO UNLINK ${fileName}: ${err}`);
                }
            }
        });
    } catch (err) {
        res.status(400).send(`Bad Request.\n${err}`).end();
    }
});

router.get('/', async(req, res) => {
    try {
        res.status(400).send("Bad request. Did not specify args, reqId.").end();
    } catch (err) {
        res.status(400).send(`Bad request. Error: ${err}`).end();
    }
});

router.all('/', async(req, res) => {
    try {
        res.status(400).send(`Bad request method; /api/view/ only supports 'GET'`).end();
    } catch (err) {
        res.status(400).send(`Bad request. Error: ${err}`).end();
    }
});

module.exports = router;
