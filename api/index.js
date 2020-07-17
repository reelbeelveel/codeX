// Script modified: Wed July 15, 2020 @ 03:35:20 EDT
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.text());

// GLOBALS
//IMPORT ROUTES
const apiCreateRouter = require('./routes/api/create');
const apiViewRouter = require('./routes/api/view');
app.use('/api/create', apiCreateRouter);
app.use('/api/view', apiViewRouter);

app.listen(3000);
