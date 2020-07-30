// Script modified: Thu July 30, 2020 @ 06:15:23 EDT
const express = require('express');
const joi = require('@hapi/joi');
const mysql = require('../sqlHandler');
const path = require('path');
const router = express.Router();
const tokenLength = 22;

const argSchema = joi.object({
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required(),
    arg: joi.string()
    .token()
});

router.get('/:reqId/:arg?', async (req, res) => {
    try {
        const value = await argSchema.validateAsync(req.params);
        if (value.arg == undefined) value.arg = 'img';
        var fileName = undefined;
        console.log(`[/api/view.js] Valid GET request.`);
        switch(value.arg) {
            case 'img': {
                const query = `SELECT path FROM images WHERE id = '${value.reqId}' LIMIT 2;`;
                const sql = await mysql.sqlQuery(query);
                if (sql.result[0] == null || sql.result[0] == undefined) throw new Error('No defined path for export.');
                fileName = sql.result[0].path;
            }
                break;
            default: {
                throw new Error('Invalid args');
            }
        }
        if (fileName === undefined) throw new Error(`The specified ID ${value.reqId} did not produce a valid filename.`);
        res.status(200).sendFile(`${fileName}`, { root: path.join(__dirname, '../exports') });
        // TODO: Get PNG directly from SQL
    } catch (err) {
        res.status(400).send(`Bad Request.\n${err}`).end();
    }
});

router.get('/', async(req, res) => {
    try {
        res.status(400).send("Bad request. Did not specify args, reqId.").end();
    } catch (err) {
        res.status(400).send(`Bad request. Error: ${err}`).end();
    }
});

router.all('/', async(req, res) => {
    try {
        res.status(400).send(`Bad request method; /api/view/ only supports 'GET'`).end();
    } catch (err) {
        res.status(400).send(`Bad request. Error: ${err}`).end();
    }
});

module.exports = router;
