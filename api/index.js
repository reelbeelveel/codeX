// Script modified: Tue July 14, 2020 @ 10:50:25 EDT
const express = require('express');
const app = express();

// GLOBALS
//IMPORT ROUTES
const apiCreateRouter = require('./routes/api/create');
const apiViewRouter = require('./routes/api/view');
app.use('/api/create', apiCreateRouter);
app.use('/api/view', apiViewRouter);

app.listen(3000);
