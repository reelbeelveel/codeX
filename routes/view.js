// Script modified: Wed July 29, 2020 @ 12:22:36 EDT
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
    .required()
});
const idSchema = joi.object({
    reqId: joi.string()
    .token()
    .length(tokenLength)
    .required()
})
router.get('/:reqId', async (req, res) => {
    try {
        const value = await idSchema.validateAsync(req.params);
        res.status(200).sendFile('view.html', { root: path.join(__dirname, '../pagesource/') });
    } catch (err) {
        res.status(400).send(`Bad Request. Error: ${err}`).end();
    }
})

router.get('/:reqId/:arg', async (req, res) => {
    try {
        const value = await argSchema.validateAsync(req.params);
        var fileName = undefined;
        if (value.reqId != {}){
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
        } else {
            console.log(`[/api/view.js] Valid GET request, no ID.`);

            // TODO: Serve a stats page?
            // Maybe most recent public snip? A feed? Idk.
        }
    } catch (err) {
        res.status(400).send(`Bad Request.\n${err}`).end();
    }
});

module.exports = router;
