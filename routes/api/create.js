// Script modified: Sat July 18, 2020 @ 12:07:35 EDT
const express = require('express');
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
    .token()
    .min(4)
    .required(),
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
});

// Accepts request in the form url/api/create/TYPE/ID
router.post('/:type/:reqId', async (req, res) => {
    try {
        // Validates Type and ID using schema
        const value = await schema.validateAsync(req.params);
        console.log(`[/api/create.js] Valid POST request for Type: ${value.type} and ID: ${value.reqId} received.`);

        // TODO: Check "Cache"?
        // TODO: If not in cache, submit to highlight engine.
        var syntaxEngine = require('../../engine');
        try {
        var codeexport = await syntaxEngine(value.type, req.body);
        } catch (err) {
            console.log(err);
            throw new Error(`Could not decode: ${err}`);
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


module.exports = router;
