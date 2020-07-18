// Script modified: Fri July 17, 2020 @ 09:42:35 EDT
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const https = require('https');
const fs = require('fs');
const httpPort = 3000;
const httpsPort = 3001;

app.use(bodyParser.text());

var key = fs.readFileSync(__dirname + '/certsFiles/selfsigned.key');
var cert = fs.readFileSync(__dirname + '/certsFiles/selfsigned.crt');

// GLOBALS
//IMPORT ROUTES
const apiCreateRouter = require('./routes/api/create');
const apiViewRouter = require('./routes/api/view');
app.use('/api/create', apiCreateRouter);
app.use('/api/view', apiViewRouter);
var credentials = {
  key: key,
  cert: cert
};

//GET home route
app.get('/', (req, res) => {
   res.send('Hello World.');
});

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);


httpServer.listen(httpPort, () => {
  console.log("Http server listing on port : " + httpPort)
});

httpsServer.listen(httpsPort, () => {
  console.log("Https server listing on port : " + httpsPort)
});
