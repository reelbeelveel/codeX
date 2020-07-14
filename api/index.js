// Script modified: Mon July 13, 2020 @ 09:10:55 EDT
const express = require('express');
const app = express();

//IMPORT ROUTES
const snippetRoute = require('./routes/api/snippet');
app.use('/api/', snippetRoute);

app.listen(3000);
