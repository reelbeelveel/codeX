const express = require('express');
const logger = require('../logger');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    logger.debug("[Web/Export] GET call to '/'");
    try {
        res.status(200).sendFile('export.html', { root: path.join(__dirname, '../pagesource/') });
        logger.debug("[Web/Export] Sent file export.html in response to export route call");
    } catch (err) {
        logger.error("[Web/Export] Error handling request:")
        logger.error(`> ${err}`);
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;
