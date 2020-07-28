// Script modified: Tue July 28, 2020 @ 06:33:38 EDT
const express = require('express');
const mysql = require('../../sqlHandler');
const router = express.Router();
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();

router.get('/', async (req, res) => {
    var token;
    try {
        var sql;
        do {
            token = await uidgen.generate();
            sql = await mysql.sqlQuery(`SELECT * FROM exports WHERE id = '${token}';`);
        } while (sql.result[0]);
        res.status(200).send(token).end();
    } catch (err) {
        console.log(err);
        res.status(400).send(err).end();
    }
});

router.all('/', (req, res) => {
    res.status(400)
        .send("Bad Request, /api/getToken only supports 'GET'.")
        .end();
});

module.exports = router;
