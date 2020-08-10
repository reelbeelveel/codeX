// Script modified: Mon August 10, 2020 @ 02:51:56 EDT

// TODO: add line numbers? somehow?
module.exports = codex;
async function codex(lang, data) {
    const hijs = require('highlight.js/lib/core');
    switch (lang) {
        case 'bash': 
            var bashLanguage = require('highlight.js/lib/languages/bash');
            console.log(bashLanguage);
            hijs.registerLanguage('bash', bashLanguage);
            const hijsOutput = hijs.highlight('bash', data);
            console.log(hijsOutput);
            return hijsOutput.value;
            break;
        case 'auto':
            const auto = require('highlight.js');
            return auto.highlightAuto(data).value;
        default : 
            throw new Error('Language not supported.'); 

    }
}
