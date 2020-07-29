// Script modified: Tue July 28, 2020 @ 08:31:50 EDT
const express = require('express');
const path = require('path');
const joi = require('@hapi/joi');
const router = express.Router();
const fileSchema = joi.object({
    file: joi.string()
    .regex(/^[0-9a-zA-Z\-_\/]*\.css$/)
    .required()
});

router.get('/:file', async (req, res) => {
    try {
        const value = await fileSchema.validateAsync(req.params)
        res.status(200).sendFile(value.file, { root: path.join(__dirname, '../pagesource/css/') });
    } catch (err) {
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;

