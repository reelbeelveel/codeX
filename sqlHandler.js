const logger = require('./logger');
const mysql = require('mysql');
require('dotenv/config');
const env = process.env;

var pool = mysql.createPool({
    connectionLimit: 10,
    host: env.SQL_HOSTNAME,
    user: env.SQL_USERNAME,
    password: env.SQL_PASSWORD,
    database: env.SQL_DATABASE
});

pool.on('connection', function (connection) {
    logger.debug('[mySQL] Connection initiated.');
    connection.query('SET SESSION auto_increment_increment=1');
});

pool.on('enqueue', function () {
    logger.debug('[mySQL] Waiting for available connection slot');
});

module.exports = pool;
