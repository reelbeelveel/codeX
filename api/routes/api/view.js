// Script modified: Tue July 14, 2020 @ 10:33:44 EDT
const express = require('express');
const router = express.Router();
const joi = require('@hapi/joi');
const constants = require('./constants');
const snipIdLength = constants.snipLength;


const idSchema = joi.object({
    snipID: joi.string()
    .alphanum()
    .length(snipIdLength)
});

router.get('/:snipID', async (req, res) => {
    try {
        const value = await idSchema.validateAsync(req.params);
        if (value != {}){
            console.log(`[/api/view.js] Valid GET request.`);

            // TODO: Find request from DB, return it.
        } else {
            console.log(`[/api/view.js] Valid GET request, no ID.`);

            // TODO: Serve a stats page?
            // Maybe most recent public snip? A feed? Idk.
        }

        // TODO: This is placeholder! Remove in future.
        res.status(200)
            .send("Hi! Your request has been received, but this part of the API is not yet functional.")
            .end();
    } catch (err) {
        res.status(400).send(`Bad Request.\n${err}`).end();
    }
});

module.exports = router;
