const logger = require('./logger');
require('dotenv/config');

var testObject = {
    prop1: `a`,
    prop2: 'b',
    prop3: "c"
};
logger.info("Info test");
logger.info(">additional info")
logger.debug("debug test");
logger.warn(">testing additional info");
logger.warn("warn test");
logger.debug(">" + JSON.stringify(testObject));
logger.error("error test");
