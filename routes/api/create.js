// Script modified: Mon July 27, 2020 @ 11:40:56 EDT
const express = require('express');
const syntaxEngine = require('../../engine');
const router = express.Router();
const joi = require('@hapi/joi');
const constants = require('./constants');
const tokenLength = constants.tkLen;

// JOI Validation Schema:
//
// - type:  Required alphanumeric string.
// - reqID: Required aAzZ0123_ (Type: Token)
//          string of len tokenLength.
const schema = joi.object({
    type: joi.string()
    .min(4)
    .required(),
    reqId: joi.string()
    .token()
    .length(tokenLength)
});

// Accepts request in the form url/api/create/TYPE/ID
router.post('/:type', async (req, res) => {
    try {
        // Validates Type and ID using schema
        const value = await schema.validateAsync(req.params);
        console.log(`[/api/create.js] Valid POST request for Type: ${value.type} and ID: ${value.reqId} received.`);

        // TODO: Check "Cache"?
        // TODO: If not in cache, submit to highlight engine.
        try {
        var codeexport = await syntaxEngine(value.type, req.body);
        } catch (err) {
            console.log(err);
            throw new Error(`Could not Highlight: ${err}`);
        }
        // TODO: Return result to user.
        // TODO: This is a placeholder! Remove in future.
        res.status(200)
            .send(codeexport)
            .end();
        // Handles Validation errors.
    } catch (err) {
        res.status(400).send(`Bad Request.\n${err}`).end();
    }
});

router.post('/', (req, res) => {
    res.status(400)
        .send('Bad Request, did not specify type/id.')
        .end();
})
router.all('/', (req, res) => {
    res.status(400)
        .send('Bad Request. /api/create only supports \'POST\'.')
        .end();
})

module.exports = router;
