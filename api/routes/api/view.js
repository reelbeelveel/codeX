// Script modified: Tue July 14, 2020 @ 04:38:33 EDT
const express = require('express');
const router = express.Router();
const joi = require('@hapi/joi');

router.all('/', (req, res) => {
    console.log('api/view call');
    res.send('received');
});

// TODO: Add joi schema for params?
var typeScheme = joi.object({
    username: joi.string()
});
// TODO: Determine Parameter/Input Schema. (URL/body?)
// TODO: Handle Requests!! ISSUE #2

/*
router.get('/create/:type', (req, res) => {
});
router.post('/create:params', (req, res) => {
});
// TODO: Build handler for requests coming from ISSUE #11
// <Now ISSUE #14>
router.get('/view', (req, res) => {
});*/
module.exports = router;
