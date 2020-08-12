const express = require('express');
const joi = require('@hapi/joi');
const logger = require('../../logger');
const mysql = require('../../sqlHandler');
const router = express.Router();
const tokenLength = 22;
const schema = joi.object({
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required(),
    table: joi.string()
    .token()
    .required(),
    column: joi.string()
    .token()
    .required(),
})

router.get('/:reqId/:table/:column', async (req, res) => {
    logger.debug("[API/db] GET Call to ':/reqId/:table/:column'");
    var result, value;
    try {
        value = await schema.validateAsync(req.params);
        console.log("GET to db router");
        var query = `SELECT ${value.column} FROM ${value.table} WHERE id = '${value.reqId}' LIMIT 2;`;

        try {
            result = await mysql.sqlQuery(query);
            res.status(200).send(`${result.result[0][value.column]}`).end();
        } catch (err) {
            if (err) throw new Error(`Database query error: ${err}`);
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad request: ${err}`).end();
    }
});

module.exports = router;
