const express = require('express');
const syntaxEngine = require('../../engine');
const router = express.Router();
const joi = require('@hapi/joi');
const constante = require('./constants');
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
        } catch (err) {
            console.log(err);
            throw new Error(`Could not Highlight: ${err}`);
        }
        res.status(200).send(codeexport).end();
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad Request,\n${err}`).end();
    }
});

router.post('/', (req, res) => {
    res.status(400)
        .send('Bad Request, did not specify type/args/id.')
        .end();
})
router.all('/', (req, res) => {
    res.status(400)
        .send('Bad Request. /api/export only supports \'POST\'.')
        .end();
})

module.exports = router;
