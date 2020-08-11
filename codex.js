// Script modified: Mon August 10, 2020 @ 05:15:53 EDT
const logger = require('./logger');
// TODO: add line numbers? somehow?
module.exports = codex;
async function codex(lang, data) {
    logger.info(`Call to ./codex.js codex(lang, data)`);
    logger.info(`>lang: ${lang}`);
    logger.info(`>data: ${data}`);
    const hijs = require('highlight.js/lib/core');
    switch (lang) {
        case 'bash': 
            var bashLanguage = require('highlight.js/lib/languages/bash');
            logger.debug(bashLanguage);
            hijs.registerLanguage('bash', bashLanguage);
            const hijsOutput = hijs.highlight('bash', data);
            logger.debug(hijsOutput);
            return hijsOutput.value;
            break;
        case 'auto':
            const auto = require('highlight.js');
            return auto.highlightAuto(data).value;
        default : 
            logger.error(`Language ${lang} not supported`);
            logger.error('> Line 25, codex.js');
            throw new Error('Language not supported.'); 
    }
}
