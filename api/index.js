// Script modified: Tue July 14, 2020 @ 06:22:00 EDT
const express = require('express');
const app = express();

// GLOBALS
//IMPORT ROUTES
const apiCreateRouter = require('./routes/api/create');
const apiViewRouter = require('./routes/api/view');
app.use('/api/create', apiCreateRouter);
app.use('/api/view/:type/:reqId', apiViewRouter);

app.listen(3000);
