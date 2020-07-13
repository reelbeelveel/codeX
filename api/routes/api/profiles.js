// Script modified: Mon July 13, 2020 @ 12:44:13 EDT
const express = require('express');
const app = express();
const router = express.Router();
const joi = require('@hapi/joi');

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
 
router.post('/', (req, res) => {
    console.log(req);
    var status = 200;
    var reqIp = req.ip;
    var resBody = `Your GET resquest was recieved: ${reqIp}`;
    res.status(status).send(resBody);
    console.log(req.body);
});

const fileSchema = joi.object({
    file: joi.string().pattern(new RegExp('^[a-zA-Z0-9]$')).required()
});

router.get('/:file', (req, res) => {
    console.log(req.params);
    console.log("API/Code Get request");
    try {
        var { fileErr, fileValue } = fileSchema.validate({ file: req.params.file });
    }
    catch (err) { }

    if ( fileErr === undefined ) {
        console.log("Client request:");
        console.log(req.params.file);
        var status = 200;
        var resBody = `Your GET resquest was recieved: ${ req.params.file}`;
        res.status(status).send(resBody);
        console.log("BODY:");
        console.log(req.body);
    } else {
        res.status(400).send(fileErr);
        console.log("BAD GET REQUEST")
    }
});

module.exports = router;
