// Script modified: Thu July 30, 2020 @ 04:34:12 EDT
const express = require('express');
const joi = require('@hapi/joi');
const path = require('path');
const router = express.Router();
const tokenLength = 22;

const idSchema = joi.object({
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
})
router.get('/:reqId', async (req, res) => {
    try {
        const value = await idSchema.validateAsync(req.params);
        res.status(200).sendFile('view.html', { root: path.join(__dirname, '../pagesource/') });
    } catch (err) {
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})


module.exports = router;
