const express = require('express');
const path = require('path');
const joi = require('@hapi/joi');
const router = express.Router();
const fileSchema = joi.object({
    file: joi.string()
    .regex(/[a-zA-Z0-9\-_.]*/)
    .required()
});

router.get('/:file', async (req, res) => {
    try {
        console.('[resource] GET REQUEST');
        const value = await fileSchema.validateAsync(req.params)
        res.status(200).sendFile(value.file, { root: path.join(__dirname, '../pagesource/Resources/') });
    } catch (err) {
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;

