const express = require('express');
const path = require('path');
const joi = require('@hapi/joi');
const logger = require('../logger');
const router = express.Router();
const fileSchema = joi.object({
    file: joi.string()
    .regex(/[a-zA-Z0-9\-_.]*/)
    .required()
});

router.get('/:file', async (req, res) => {
    logger.debug("[Web/Resources] GET call to '/:file'");
    try {
        const value = await fileSchema.validateAsync(req.params);
        logger.debug("[Web/Resources] Successfully validated schema");
        logger.debug(`> req.params: ${value}`);
        res.status(200).sendFile(value.file, { root: path.join(__dirname, '../pagesource/Resources/') });
        logger.debug(`[Web/Resources] Sent file ${value.file} in response to Resource route call`);
    } catch (err) {
        logger.error("[Web/Resources] Error handling request:");
        logger.error(`> ${err}`);
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;

