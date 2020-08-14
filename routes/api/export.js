const express = require('express');
const joi = require('@hapi/joi');
const logger = require('../../logger');
const mysql = require('../../sqlHandler');
const router = express.Router();
const syntaxEngine = require('../../engine');
const util = require('util');

const tokenLength = 22;
const schema = joi.object({
    type: joi.string()
    .min(4)
    .required(),
    args: joi.string()
    .required(),
    style: joi.string()
    .required(),
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
});

const rethrowError = {
    noConnect: (err) => {
        throw new Error(`Could not get connection, returned error: ${err.message}`);
    },
    connectErr: (err) => {
        throw new Error(`Connection query returned error: ${err.message}`);
    }
};

router.post('/:type/:args/:style/:reqId', async (req, res) => {
    // Validate schema, Check Parameters.
    logger.debug("[API/Export] POST call to '/:type/:args/:style/:reqId'");
    try {
        var value;
        try {
            value = await schema.validateAsync(req.params);
            logger.debug("[API/Export] Successfully validated schema");
            logger.debug(`> req.params.type: ${value.type}`);
            logger.debug(`> req.params.args: ${value.args}`);
            logger.debug(`> req.params.style: ${value.style}`);
            logger.debug(`> req.params.reqId: ${value.reqId}`);
        } catch (err) {
            throw new Error(`Error validating arguments: ${err}`);
        }

        if (req.body == "" | req.body == undefined | req.body == null) {
            logger.warn("[API/Export] Ignoring empty submission");
            throw new Error('Nothing to Highlight!');
        } else {
            logger.verbose("[API/Export] Valid request body:");
            logger.verbose(`> ${req.body}`);
        }

        switch (value.args) {
            case 'img': {
                try {
                    var codeExport = await syntaxEngine(value.type, req.body);
                    const sheet = value.style;

                    // Create Exports Entry
                    var promise = new Promise( (resolve, reject) => {
                        try {
                            mysql.getConnection( async (err, con) => {
                                if (err) {
                                    logger.error("[API/Export] Error with operation (did not connect)");
                                    rethrowError.noConnect(err);
                                } else {
                                    var promise = [ undefined, undefined, undefined ];
                                    var query0 = 'DELETE FROM exports WHERE id = ?;';
                                    var query1 = "INSERT INTO exports (" +
                                        " id, " +
                                        " timestamp, " +
                                        " code_type, " +
                                        " engine_type, " +
                                        " plaintext, " +
                                        " highlight " +
                                        ") VALUES (" +
                                        "?, ?, ?, ?, ?, ?" +
                                        ");";
                                    var fields1 = [ 
                                        value.reqId,
                                        Date.now(),
                                        value.type.substring(4),
                                        value.type.slice(0,4),
                                        req.body,
                                        codeExport 
                                    ];

                                    var query2 = "INSERT INTO images (" +
                                        " id, " +
                                        " style " +
                                        ") VALUES (" +
                                        "?, ?" +
                                        ");";
                                    var fields2 = [
                                        value.reqId,
                                        sheet
                                    ];

                                    promise[0] = await new Promise( (resolve, reject) => {
                                        con.query(query0, [value.reqId], (err, result) => {
                                            logger.debug("QUERY 0".red);
                                            if (err) {
                                                logger.error("[API/Export] Error with operation DELETE (connection error)");
                                                rethrowError.connectErr(err);
                                                reject(null);
                                            } else {
                                                logger.debug('[API/Export] Database query returned:');
                                                logger.debug(`> query: ${query0}`);
                                                logger.debug(`> id: ${con.escape(value.reqId)}`);
                                                logger.debug(`> affected ${result.affectedRows} row(s)`);
                                                logger.debug(`> ${result.message}`);
                                                resolve(null);
                                            }
                                        })});

                                    promise[1] = await new Promise ( (resolve, reject) => {
                                        con.query(query1, fields1, (err, result) => {
                                            logger.debug("QUERY 1".red);
                                            if(err) {
                                                logger.error("[API/Export] Error with operation INSERT INTO EXPORTS (connection error)");
                                                rethrowError.connectErr(err);
                                                reject(null);
                                            } else {
                                                logger.debug('[API/Export] Database query returned:');
                                                logger.debug(`> query: ${query1}`);
                                                logger.debug(`> id: ${con.escape(value.reqId)}`);
                                                logger.debug(`> timestamp: ${con.escape(Date.now())}`);
                                                logger.debug(`> code_type: ${con.escape(value.type.substring(4))}`);
                                                logger.debug(`> engine_type: ${con.escape(value.type.slice(0,4))}`);
                                                logger.debug(`> plaintext: ${con.escape(req.body)}`);
                                                logger.debug(`> highlight: ${con.escape(codeExport)}`);
                                                logger.debug(`> affected ${result.affectedRows} row(s)`);
                                                logger.debug(`> ${result.message}`);
                                                resolve(null);
                                            }
                                        })});

                                    promise[2] = await new Promise ( (resolve, reject) => {
                                        con.query(query2, fields2, (err, result) => {
                                            logger.debug("QUERY 2".red);
                                            if(err) {
                                                logger.error("[API/Export] Error with operation INSERT INTO EXPORTS (connection error)");
                                                rethrowError.connectErr(err);
                                                reject(null);
                                            } else {
                                                logger.debug('[API/Export] Database query returned:');
                                                logger.debug(`> query: ${query2}`);
                                                logger.debug(`> id: ${con.escape(value.reqId)}`);
                                                logger.debug(`> timestamp: ${con.escape(Date.now())}`);
                                                logger.debug(`> style: ${con.escape(sheet)}`);
                                                logger.debug(`> affected ${result.affectedRows} row(s)`);
                                                logger.debug(`> ${result.message}`);
                                                con.release();
                                                resolve(null);
                                            }
                                        })});
                                    if(promise[0] === null && promise[1] === null && promise[2] === null) resolve(value.reqId);
                                    else {
                                        logger.warn("[API/Export] Failed to resolve promise(s):");
                                        logger.warn(`> ${util.inspect(promise, false, null, true)}`);
                                    }
                                }
                            });
                        } catch (err) {
                            logger.error("[API/Export] Error with database operation:");
                            logger.error(`> ${err}`);
                            reject(null);
                            throw new Error(`Error with database operation: ${err.message}`);
                        }
                    });
                    logger.debug("ABOUT TO AWAIT PROMISE");
                    var completeId = await promise;
                    logger.debug("PROMISE RESOLVED");
                    if (completeId == null) throw new Error;
                    res.status(200).send(completeId).end();
                    logger.debug(`[API/Export] Sent ${value.reqId} after succefully exporting in response to export API call`)
                } catch (err) {
                    console.log(err);
                    throw new Error(`Could not Export: ${err}`);
                }
                break;
            }
            default: {
                throw new Error('Invalid arguments.');
            }
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(`Bad Request,\n${err}`).end();
    }
});

router.post('/', (req, res) => {
    res.status(400)
        .send('Bad Request, did not specify type/args/style/id.')
        .end();
});
router.all('/', (req, res) => {
    res.status(400)
        .send('Bad Request. /api/export only supports \'POST\'.')
        .end();
});

module.exports = router;
