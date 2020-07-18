// Script modified: Sat July 18, 2020 @ 06:51:26 EDT
// Private
const hijs = require('highlight.js');


// Public
module.exports = engine;
async function engine(type, data) {
    const lang = type.substring(4);
    if(type.startsWith('hijs')){
        console.log('Engine Request to [hijs]');
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
        console.log('Engine Request to [cdx_]');
        var codex = require('./codex');
        return codex(lang, data);
    }
    else { // Return An Error
        throw new Error(`Invalid control type: ${type.slice(0,4)}`);
    }
}

// engine.config()
