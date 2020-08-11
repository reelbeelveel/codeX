// Script modified: Mon August 10, 2020 @ 08:44:04 EDT
const express = require('express');
const path = require('path');
const joi = require('@hapi/joi');
const logger = require('../logger');
const router = express.Router();
const fileSchema = joi.object({
    file: joi.string()
    .regex(/^[0-9a-zA-Z\-_\/]*\.css$/)
    .required()
});

router.get('/:file', async (req, res) => {
    logger.debug("[Web/css] GET call to '/:file'")
    try {
        const value = await fileSchema.validateAsync(req.params);
        logger.debug("[Web/css] Successfully validated schema");
        logger.debug(`> req.params: ${value}`);
        res.status(200).sendFile(value.file, { root: path.join(__dirname, '../pagesource/css/') });
        logger.debug(`[Web/css] Sent file ${value.file} in response to css route call`);
    } catch (err) {
        logger.error("[Web/css] Error handling request:");
        logger.error(`> ${err}`);
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;

