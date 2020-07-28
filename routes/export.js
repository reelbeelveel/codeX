const express = require('express');
const joi = require('@hapi/joi');
const mysql = require('../sqlHandler');
const path = require('path');
const router = express.Router();
const tokenLength = 22;

const idSchema = joi.object({
    arg: joi.string()
    .token()
    .required(),
    reqId: joi.string()
    .token()
    .length(tokenLength)
});
router.get('/', async (req, res) => {
    try {
        res.status(200).sendFile('export.html', { root: path.join(__dirname, '../pagesource/') });
    } catch (err) {
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;