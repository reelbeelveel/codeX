// Script modified: Mon August 03, 2020 @ 07:14:08 EDT
const express = require('express');
const path = require('path');
const router = express.Router();
const tokenLength = 22;

router.get('/', async (req, res) => {
    try {
        res.status(200).sendFile('view.html', { root: path.join(__dirname, '../pagesource/') });
    } catch (err) {
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})


module.exports = router;
