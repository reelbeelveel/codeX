// Script modified: Tue July 28, 2020 @ 07:11:21 EDT
const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.status(200).sendFile('create.html', { root: path.join(__dirname, '../pagesource/') });
    } catch (err) {
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

module.exports = router;
