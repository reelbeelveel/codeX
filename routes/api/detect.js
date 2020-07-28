const express = require('express');
const router = express.Router();
const hijs = require('highlight.js');

router.post('/', async (req, res) => {
    try {
        var output = hijs.highlightAuto(req.body);
        res.status(200).send(output.language).end();
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad Request,\n${err}`).end();
}});
router.all('/', (req, res) => {
    res.status(400)
        .send('Bad Request. /api/detect only supports \'POST\'.')
        .end();
});

module.exports = router;
