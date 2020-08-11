// Script modified: Mon August 10, 2020 @ 08:13:13 EDT
const express = require('express');
const path = require('path');
const router = express.Router();
const logger = require('../logger');

router.get('/', async (req, res) => {
    logger.debug("[Web/Create] GET call to '/'");
    try {
        res.status(200).sendFile('create.html', { root: path.join(__dirname, '../pagesource/') });
        logger.debug("[Web/Create] Sent file create.html in response to create route call")
    } catch (err) {
        logger.error("[Web/Create] Error handling request:");
        logger.error(`> ${err}`);
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;
