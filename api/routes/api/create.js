// Script modified: Tue July 14, 2020 @ 05:53:14 EDT
const express = require('express');
const router = express.Router();
const joi = require('@hapi/joi');


router.get('/:type/:reqId', (req, res) => {
    var type = req.params.type;
    var reqId = req.params.reqId;
    console.log(`Request of Type: ${type} and ID: ${reqId} received.`)
});

// TODO: Add joi schema for params?
var typeScheme = joi.object({
    username: joi.string()
});
module.exports = router;
