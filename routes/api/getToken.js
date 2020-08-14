// Script modified: Thu August 13, 2020 @ 05:56:10 EDT
const express = require('express');
const logger = require('../../logger');
const mysql = require('../../sqlHandler');
const router = express.Router();
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();

router.get('/', async (req, res) => {
    logger.info("[API/Token] GET reqquest to route '/' ");
    var token, sql;
    try {
        token = await new Promise((resolve) => {
         mysql.getConnection( async (err, con) => {
            if(err) throw err;
            do {
                var t = await uidgen.generate();
                con.query("SELECT * FROM exports WHERE id = ?;", t, (err, result) => {
                    if(err) throw err;
                    sql = result[0];
                    logger.debug(`[API/Token] token ${t}, sql `);
                });
            } while (sql);
            resolve(t)
            con.release();
        });
        });
            res.status(200).send(token).end();
        logger.debug(`[API/Token] Sent token ${token}`);
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
