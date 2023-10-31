const logger = require('pino');
const dayjs = require('dayjs');

const log = logger({
  prettyPrint: false,
  base: {
    pid: false,
  },
  timestamp: () => `,"time":"${dayjs().format()}"`,
});
module.exports = log;
