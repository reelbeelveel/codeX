// Script modified: Thu August 13, 2020 @ 07:05:38 EDT
const colors = require('colors');
require('dotenv/config');
var enabled = {
    info: (process.env.LOG_INFO == 'true'),
    debug: (process.env.LOG_DEBUG == 'true'),
    verbose: (process.env.LOG_VERBOSE == 'true'),
    warn: (process.env.LOG_WARN == 'true'),
    error: (process.env.LOG_ERROR == 'true')
};
console.log(enabled);
function log(data, level) {
    try{
        var string;
        if (data.match(/^>/) != null) {
            string = `---> ${data.slice(1)}`.dim;
        } else {
            var timestamp = new Date().toISOString();
            string = `\n[${timestamp}][${level}] ${data}`;
        }
        switch (level) {
            case 'info':
                console.info(string.dim);
                break;
            case 'debug':
                console.debug(string.white);
                break;
            case 'verbose':
                console.log(string.yellow);
                break;
            case 'warn':
                console.warn(string.yellow.underline)
                break;
            case 'error':
                console.error(string.red.bold);
                break;
        }
    } catch (err) {
        console.log("LOGGING ERROR".red.bold.underline)
        console.log(err)
    }
}

var logger = {
    info: (data) => {
        if(enabled.info) log(data, 'info');
    },

    debug: (data) => {
        if(enabled.debug) log(data, 'debug');
    },
    verbose: (data) => {
        if(enabled.verbose) log(data, 'verbose');
    },
    warn: (data) => {
        if(enabled.warn) log(data, 'warn');
    },

    error: (data) => {
        if(enabled.error) log(data, 'error');
    }
}
module.exports = logger;
