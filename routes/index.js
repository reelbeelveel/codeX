// Script modified: Mon August 10, 2020 @ 08:19:53 EDT
const express = require('express');
const logger = require('../logger');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    logger.debug("[Web/Index] GET call to '/'");
    try {
        res.status(200).sendFile('index.html', { root: path.join(__dirname, '../pagesource/') });
        logger.debug("[Web/Index] Sent file index.html in response to index route call");
    } catch (err) {
        logger.error("[Web/Index] Error handling request:");
        logger.error(`> ${err}`);
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;
