const logger = require('./logger');
const mysql = require('mysql');
require('dotenv/config');
const env = process.env;

var con = mysql.createConnection({
    host: env.SQL_HOSTNAME,
    user: env.SQL_USERNAME,
    password: env.SQL_PASSWORD,
    database: env.SQL_DATABASE
});

con.connect((err) => {
    if(err) {
        logger.error(`[sqlHandler] Error while connecting to database:`);
        logger.error(`>${err}`);
        logger.error(`> Line 17, ./sqlHandler.js`);
        throw err;
    }
    logger.info(`[sqlHandler] Connected to ${env.SQL_HOSTNAME}:${env.SQL_DATABASE}`);
    logger.debug(`> User: ${env.SQL_USERNAME}`);
});

module.exports.sqlQuery = (sql) => {
    return new Promise(data => {
        con.query(sql, (err, result, fields) => {
            if (err) throw err;
            try {
                logger.debug(`[sqlHandler] ${result, fields}`);
                data({result, fields});
            } catch (error) {
                data({});
                logger.error(`[sqlHandler] Error while fulfilling promised result:`);
                logger.error(`>${err}`);
                logger.error(`> Line 27, ./sqlHandler.js`)
                throw error;
}})})};
