const constante = require('./constants');
const express = require('express');
const joi = require('@hapi/joi');
const router = express.Router();
const syntaxEngine = require('../../engine');
const path = require('path');
const puppeteer = require('puppeteer');
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
})

router.post('/:type/:args/:style/:reqId', async (req, res) => {
    // Validate schema, Check Parameters.
    try {
        const value = await schema.validateAsync(req.params);
        try {
            var tempString = await syntaxEngine(value.type, req.body);
            var codeExport = tempString;
            const browser = await puppeteer.launch({headless: true, args:['--no-sandbox']});
            const page = await browser.newPage();
            const sheet = value.style;

            await page.setContent(`<html><pre><code>${codeExport}</code></pre></html>`);
            await page.addStyleTag({path: path.join(__dirname, `/../../styles/${sheet}.css`)})
            await page.screenshot({path: path.join(__dirname, `/../../exports/${value.reqId}.png`)});
            res.status(200).sendFile(`${value.reqId}.png`, { root: path.join(__dirname, '../../exports') });

        } catch (err) {
            console.log(err);
            throw new Error(`Could not Export: ${err}`);
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
