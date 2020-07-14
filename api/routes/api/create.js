// Script modified: Tue July 14, 2020 @ 07:37:38 EDT
const express = require('express');
const router = express.Router();
const joi = require('@hapi/joi');
const constants = require('./constants');
const tokenLength = constants.tkLen;

// TODO: Add joi schema for params?
const schema = joi.object({
    type: joi.string()
    .alphanum()
    .required(),
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
});

router.get('/:type/:reqId', async (req, res) => {
    try {
        const value = await schema.validateAsync(req.params);
        console.log("beep boop");
        res.send(`Valid request for Type: ${value.type} and ID: ${value.reqId} received.`);
    } catch (err) {
        res.status(400).send(`Bad Request.\n${err}`).end();
    }
});


module.exports = router;
