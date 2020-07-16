// Script modified: Wed July 15, 2020 @ 09:26:30 EDT
// Private


// Public
module.exports = engine;
async function engine(type, data) {
    const hijs = require('highlight.js');
    return hijs.highlight(type, data).value;
}

// engine.config()
