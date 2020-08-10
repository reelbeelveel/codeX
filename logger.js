// Script modified: Mon August 10, 2020 @ 05:07:26 EDT
const colors = require('colors');
require('dotenv/config');
var enabled = {
    info: process.env.LOG_INFO,
    debug: process.env.LOG_DEBUG,
    warn: process.env.LOG_WARN,
    error: process.env.LOG_ERROR
};
function log(data, level) {
    if (data.match(/^>/) != null) {
        console.log(`---> ${data.slice(1)}`.white.dim);
    } else {
    var timestamp = new Date().toISOString();
    var string = `\n[${timestamp}][${level}] ${data}`
        switch (level) {
            case 'info':
                console.log(string.dim);
                break;
            case 'debug':
                console.log(string.white);
                break;
            case 'warn':
                console.log(string.yellow.underline)
                break;
            case 'error':
                console.log(string.red.bold);
                break;
        }
    }
}

var logger = {
    info: (data) => {
        if(enabled.info) log(data, 'info');
    },

    debug: (data) => {
        if(enabled.debug) log(data, 'debug');
    },

    warn: (data) => {
        if(enabled.warn) log(data, 'warn');
    },

    error: (data) => {
        if(enabled.error) log(data, 'error');
    }
}
module.exports = logger;
