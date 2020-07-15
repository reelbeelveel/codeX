// Script modified: Tue July 14, 2020 @ 10:35:24 EDT
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
    .alphanum()
    .required(),
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
});

// Accepts request in the form url/api/create/TYPE/ID
router.get('/:type/:reqId', async (req, res) => {
    try {
        // Validates Type and ID using schema
        const value = await schema.validateAsync(req.params);
        console.log(`[/api/create.js] Valid GET request for Type: ${value.type} and ID: ${value.reqId} received.`);

        // TODO: Check "Cache"?
        // TODO: If not in cache, submit to highlight engine.
        // TODO: Return result to user.
        // TODO: This is a placeholder! Remove in future.
        res.status(200)
            .send("Hi! Your request has been received, but this part of the API is not yet functional.")
            .end();
        // Handles Validation errors.
    } catch (err) {
        res.status(400).send(`Bad Request.\n${err}`).end();
    }
});


module.exports = router;
