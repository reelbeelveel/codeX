// Script modified: Sun July 26, 2020 @ 01:29:00 EDT
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');
const httpPort = 3000;
const httpsPort = 3001;
const UIDGenerator = require('uid-generator');
const uidgen = new UIDGenerator();

app.use(bodyParser.text());

var key = fs.readFileSync(__dirname + '/certsFiles/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certsFiles/selfsigned.crt');

// GLOBALS
//IMPORT ROUTES

app.use(function(req, res, next) {
    //res.header("Access-Control-Allow-Origin", "http://localhost:4000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "https://codexapp.co"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "http://codexapp.co"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const apiCreateRouter = require('./routes/api/create');
const apiViewRouter = require('./routes/api/view');
const apiExportRouter = require('./routes/api/export');
const apiDetectRouter = require('./routes/api/detect');

app.use('/api/create', apiCreateRouter);
app.use('/api/view', apiViewRouter);
app.use('/api/export', apiExportRouter);
app.use('/api/detect', apiDetectRouter);

var credentials = {
    key: key,
    cert: cert
};

app.get('/api/getToken/', async (req, res) => {
    try {
        var token = await uidgen.generate();
        res.status(200).send(token).end();
    } catch (err) {
        console.log(err);
        res.status(400).send(err).end();
    }
});

app.all('/api/getToken', (req, res) => {
    res.status(400)
        .send("Bad Request, /api/getToken only supports 'GET'.")
        .end();
});

app.all('/api', (req, res) => {
    res.status(400)
        .send("Bad Request, specify a subroutine ('/api/create/', '/api/detect/', /api/export/', 'api/getToken/', '/api/view/')")
        .end();
});


var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


httpServer.listen(httpPort, () => {
    console.log("Http server listing on port : " + httpPort)
});

httpsServer.listen(httpsPort, () => {
    console.log("Https server listing on port : " + httpsPort)
});
