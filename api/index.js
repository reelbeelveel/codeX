// Script modified: Sun July 12, 2020 @ 05:37:38 EDT
const express = require('express');
const app = express();

//IMPORT ROUTES
codeTypeRoute = require('./routes/api/codeTypes');
app.use('/api/codeTypes', codeTypeRoute);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(3000);
