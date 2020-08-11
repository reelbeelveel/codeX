// Script modified: Mon August 10, 2020 @ 08:44:05 EDT
const express = require('express');
const path = require('path');
const joi = require('@hapi/joi');
const logger = require('../logger');
const router = express.Router();
const fileSchema = joi.object({
    file: joi.string()
    .regex(/^[0-9a-zA-Z\-_]*\.js$/)
    .required()
});

router.get('/:file', async (req, res) => {
    logger.debug("[Web/js] GET call to '/:file'");
    try {
        const value = await fileSchema.validateAsync(req.params);
        logger.debug("[Web/js] Successfully validated schema.");
        logger.debug(`> req.params: ${value}`);
        res.status(200).sendFile(value.file, { root: path.join(__dirname, '../pagesource/js/') });
        logger.debug(`[Web/js] Sent file ${value.file} in response to js route call`);
    } catch (err) {
        logger.error("[Web/js] Error handling request:");
        logger.error(`> ${err}`);
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;

