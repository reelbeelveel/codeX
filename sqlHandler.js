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
    if(err) throw err;
    console.log(`Connected to ${env.SQL_HOSTNAME}:${env.SQL_HOSTNAME}`);
});

module.exports.sqlQuery = async (sql) => {
    return con.query(sql, (err, result) => {
        if (err) throw err;
        console.log({sql, result, err});
        return result;
    })
};
