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
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
})

router.post('/:type/:args/:reqId', async (req, res) => {
    // Validate schema, Check Parameters.
    try {
        const value = await schema.validateAsync(req.params);
        try {
            var codeexport = await syntaxEngine(value.type, req.body);
            const browser = await puppeteer.launch({headless: true, args:['--no-sandbox']});
            const page = await browser.newPage();
            await page.setContent(`<html>${codeexport}</html>`);
            await page.screenshot({path: path.join(__dirname, '/../../exports/tmp.png')});
            res.status(200).sendFile('tmp.png', { root: path.join(__dirname, '../../exports') });

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
        .send('Bad Request, did not specify type/args/id.')
        .end();
});
router.all('/', (req, res) => {
    res.status(400)
        .send('Bad Request. /api/export only supports \'POST\'.')
        .end();
});

module.exports = router;
