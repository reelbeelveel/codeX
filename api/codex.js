// Script modified: Thu July 16, 2020 @ 12:19:37 EDT

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
        default : 
            throw new Error('Language not supported.'); 

    }
}
