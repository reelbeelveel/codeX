// Script modified: Thu July 30, 2020 @ 06:14:17 EDT
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const fs = require('fs');
const http = require('http');
const https = require('https');
const httpPort = 3000;
const httpsPort = 3001;
require('dotenv/config');

app.use(bodyParser.text());
app.use(express.static(__dirname + '/public'));

var key = fs.readFileSync(__dirname + process.env.SSL_KEY);
var cert = fs.readFileSync(__dirname + process.env.SSL_CRT);

// GLOBALS
//IMPORT ROUTES

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.REQUEST_ORIGIN); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

const apiCreateRouter = require('./routes/api/create');
const apiExportRouter = require('./routes/api/export');
const apiDetectRouter = require('./routes/api/detect');
const apiTokenRouter = require('./routes/api/getToken');
const apiViewRouter = require('./routes/api/view');
const createRouter = require('./routes/create');
const cssRouter = require('./routes/cssRouter');
const exportRouter = require('./routes/export');
const indexRouter = require('./routes/index');
const jsRouter = require('./routes/jsRouter');
const viewRouter = require('./routes/view');
const resourceRouter = require('./routes/resource');

app.use('/api/create', apiCreateRouter);
app.use('/api/export', apiExportRouter);
app.use('/api/detect', apiDetectRouter);
app.use('/api/getToken', apiTokenRouter);
app.use('/api/view', apiViewRouter);
app.use('/', indexRouter);
app.use('/css', cssRouter);
app.use('/create', createRouter);
app.use('/export' , exportRouter);
app.use('/js', jsRouter);
app.use('/view', viewRouter);
app.use('/v', apiViewRouter);
app.use('/Resources', resourceRouter);

var credentials = {
    key: key,
    cert: cert
};


app.all('/api', (req, res) => {
    res.status(400)
        .send("Bad Request, specify a subroutine ('/api/create/', '/api/detect/', /api/export/', 'api/getToken/', '/view')")
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
