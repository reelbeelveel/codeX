// Script modified: Mon August 10, 2020 @ 08:32:31 EDT
const express = require('express');
const logger = require('../logger');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    logger.debug("[Web/View] GET call to '/'");
    try {
        res.status(200).sendFile('view.html', { root: path.join(__dirname, '../pagesource/') });
        logger.debug("[Web/View] Sent file view.html in response to view route call");
    } catch (err) {
        logger.error("[Web/View] Error handling request:")
        logger.error(`> ${err}`);
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})


module.exports = router;
