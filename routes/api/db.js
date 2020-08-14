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
    logger.info("[API/db] GET Call to ':/reqId/:table/:column'");
    var requestedData, value;
    try {
        value = await schema.validateAsync(req.params);
        logger.debug("[API/db] Successfully validated schema");

        requestedData = await new Promise ( (resolve, reject) => {
            try {
                mysql.getConnection( (err, con) => {
                    if (err) {
                        throw new Error(`Could not get connection, returned error: ${err.message}`);
                    } else {
                        var query = "SELECT ??  FROM ?? WHERE id = ? LIMIT 2;";
                        var fields = [value.column, value.table, value.reqId];
                        con.query(query, fields, (err, result) => {
                            if (err) {
                                logger.error("[API/db] Error with operation SELECT ? FROM ? WHERE id = ? LIMIT 2 (connection error)");
                                throw new Error(`Connection query returned error: ${err.message}`);
                            } else {
                                logger.debug("[API/db] Database query returned:");
                                logger.debug(`> query: ${query}`);
                                logger.debug(`> column: ${value.column}`);
                                logger.debug(`> table: ${value.table}`);
                                logger.debug(`> id: ${con.escape(value.reqId)}`);
                                logger.debug(`> (result!) ${value.column} : ${result[0][value.column]}`);
                                resolve(result[0][value.column]);
                                con.release();
                            }
                        });
                    }
                });
            } catch (err) {
                reject(err);
                throw new Error(`Error with database operation: ${err.message}`);
            }
        });
        if (requestedData.type != 'string') requestedData = `${requestedData}`;

        res.status(200).send(requestedData).end();
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad request: ${err}`).end();
    }
});

module.exports = router;
