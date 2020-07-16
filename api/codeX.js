// Script modified: Thu July 16, 2020 @ 11:08:21 EDT
// Private


// Public
module.exports = engine;
async function engine(type, data) {
    const lang = type.substring(4);
    if(type.startsWith('hijs')){
        console.log('Engine Request to [hijs]');
        const hijs = require('highlight.js');
        return hijs.highlight(lang, data).value;
    }
    // Add New control type with
    // else if(type.startsWith('xxxx'))
    else if(type.startsWith('cdx_')) {
        console.log('Engine Request to [cdx_]');
        return data;
    }
    else { // Return An Error
        throw new Error(`Invalid control type: ${type.slice(0,4)}`);
    }
}

// engine.config()
