// Script modified: Mon August 10, 2020 @ 05:20:07 EDT
// Private
const hijs = require('highlight.js');
const logger = require('./logger');

// Public
module.exports = engine;
async function engine(type, data) {
    logger.info('Call to ./engine.js');
    const lang = type.substring(4);
    if(type.startsWith('hijs')){
        logger.info('> Engine Request to [hijs]');
        if (lang == "auto"){
            return hijs.highlightAuto(data).value;
        } else {
        hijs.registerLanguage(lang, require(`highlight.js/lib/languages/${lang}`));
        return hijs.highlight(lang, data).value;
        }
    }
    // Add New control type with
    // else if(type.startsWith('xxxx'))
    else if(type.startsWith('cdx_')) {
        logger.info('> Engine Request to [cdx_]');
        var codex = require('./codex');
        return codex(lang, data);
    }
    else { // Return An Error
        let error = new Error(`Invalid control type: ${type.slice(0,4)}`);
        console.error(error);
        console.error('> line 26, ./engine.js');
        throw error;
    }
}

// engine.config()
