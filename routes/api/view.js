// Script modified: Sun August 02, 2020 @ 10:22:15 EDT
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
                // TODO: vvv ADD WATERMARK TO IMAGE USING TEMPLATE HTML vvv
                await page.setContent(`<html class="hljs"><pre id="bounding" style="margin: 0; padding: 0; position: fixed; top: 0; left: 0;" class="hljs"><code class="hljs" style="padding: 2em 2em 2em 2em;">${highlight}</code></pre></html>`);
                await page.addStyleTag({path: path.join(__dirname, `/../../pagesource/css/${sheet}`)});
                const { width, height } = await (await page.$('pre')).boundingBox();
                await page.setViewport({ width: width, height: height});
                await page.screenshot({path: path.join(__dirname, `/../../exports/${value.reqId}.png`), clip: { x: 0, y: 0, width, height}});
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
                    await fs.unlink(path.join(__dirname, `/../../exports/${fileName}`));
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
