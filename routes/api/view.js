// Script modified: Tue August 11, 2020 @ 04:21:09 EDT
const express = require('express');
const fs = require('fs').promises;
const joi = require('@hapi/joi');
const logger = require('../../logger');
const mysql = require('../../sqlHandler');
const path = require('path');
const puppeteer = require('puppeteer');
const router = express.Router();
const util = require('util');

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
    logger.debug("[API/View] GET call to '/:reqId/:arg?'");
    try {
        var content;
        const value = await argSchema.validateAsync(req.params);
        logger.debug('[API/View] Successfully validated schema.');

        if (value.arg == undefined) {
            logger.warn('[API/View] No argument provided.')
            value.arg = 'img';
        }

        var fileName = undefined;

        logger.debug(`> arg: ${value.arg}`);
        logger.debug(`> reqId: ${value.reqId}`);

        switch(value.arg) {
            case 'img':
                // setup necessary sql queries,
                var query =
                    "SELECT style AS sheet, highlight " +
                    "FROM images i " +
                    "JOIN exports e " +
                    "ON i.id = e.id " +
                    `WHERE i.id = '${value.reqId}' ` +
                    "LIMIT 2;";
                logger.verbose('[API/View] Querying database');
                logger.verbose(`> query: ${query}`);
                var sql = await mysql.sqlQuery(query);
                logger.debug('[API/View] Result returned from database');
                logger.debug(`> query: ${query}`);
                logger.verbose(`> result: ${util.inspect(sql, false, null, true)}`);
                console.log(util.inspect(sql, false, null, true));

                const sheet = sql.result[0].sheet;
                const highlight = sql.result[0].highlight;
                logger.debug(`> loaded sheet: ${sheet}`);
                logger.debug(`> loaded highlight length: ${highlight.length} `);
                logger.verbose(`>loaded highlight: ${util.inspect(highlight, false, null, true)}`);

                if (highlight == undefined || highlight == null || highlight == "") {
                    throw new Error(`No content defined for the identifier: ${value.reqId}`);
                }
                if (sheet == undefined || sheet == null || sheet == "") {
                    throw new Error(`No sheet defined for the identifier: ${value.reqId}`);
                }

                const browser = await puppeteer.launch({headless: true, args:['--no-sandbox', '--font-render-hinting high']});
                logger.debug('> (pup) Launched browser process.');
                const page = await browser.newPage();
                logger.debug('> (pup) Opened new page.');

                // Set our page's content (template as desired) + styleheet (from request, or default)?
                content = '<html class="hljs">' +
                    '<pre id="bounding" class="hljs">' +
                    '<code class="hljs">' +
                    `${highlight}` +
                    '</code>' +
                    '<br>' +
                    '<div id="watermark" align="right">' +
                    '<img src="http://localhost:3000/Resources/openbracket.png" style="height: 2em; position: relative; transform: translate(0%, 35%);"/>' +
                    `codexapp.co/v?id=${value.reqId}` +
                    '<img src="http://localhost:3000/Resources/closebracket.png" style="height: 2em; position: relative; transform: translate(0%, 35%);"/>' +
                    '</div></pre></html>';

                await page.setContent(content, { waitUntil: "networkidle0" });
                logger.debug('> (pup) Loaded content');

                await page.addStyleTag({path: path.join(__dirname, `/../../pagesource/css/${sheet}`)});
                logger.debug(`> (pup) Loaded stylesheet ${sheet}`);

                await page.addStyleTag({path: path.join(__dirname, '/../../pagesource/css/snippet.css')});
                logger.debug('> (pup) snippet.css added');

                await page.focus('pre#bounding');
                logger.debug('> (pup) focused pre#bounding');

                var { width, height } = await (await page.$('pre')).boundingBox();
                width = Math.ceil(width);
                height = Math.ceil(height);
                logger.debug(`> (pup) Got dimensions: ${width} x ${height}`);


                await page.setViewport({ width, height });
                logger.debug('> (pup) viewport set');

                try {
                    const content = await page.content()
                    logger.verbose(`> (pup) page content:\n${util.inspect(content, false, null, true)}`);
                } catch (err) {
                    logger.warn('[API/View] Error checking page content');
                    logger.error(`> ${err}`);
                }
                await page.screenshot({path: path.join(__dirname, `/../../exports/${value.reqId}.png`), clip: { x: 0, y: 0, width, height}, defaultViewport: null});
                logger.debug('[API/View] Screenshot taken')
                await page.close();
                logger.verbose('> (pup) page closed');
                await browser.close();
                logger.verbose('> (pup) browser closed');
                fileName = `${value.reqId}.png`;
                break;
            default: 
                throw new Error('[API/View.js] Line 118: Invalid argument.');

        }

        if (fileName === undefined) throw new Error(`The specified ID ${value.reqId} did not produce a valid filename.`);
        res.status(200).sendFile(`${fileName}`, { root: path.join(__dirname, '../../exports')});
        logger.debug(`[API/View] Sent file ${fileName} in response to api view request`);
    } catch (err) {
        logger.error("[API/View] Error handling request:");
        logger.error(`> ${err}`);
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
