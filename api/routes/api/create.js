// Script modified: Tue July 14, 2020 @ 06:22:01 EDT
const express = require('express');
const router = express.Router();
const joi = require('@hapi/joi');
const constants = require('./constants');

// TODO: Add joi schema for params?
const schema = joi.object({
    type: joi.string()
        .alphanum()
        .required(),
    reqId: joi.string()
        .token()
        .length(constants.tokenLength)
        .required()
});
router.get('/:type/:reqId', (req, res) => {
    
    var type = req.params.type;
    var reqId = req.params.reqId;
    console.log(`Request of Type: ${type} and ID: ${reqId} received.`)
});

module.exports = router;
