const LIVE = true;

if (LIVE) {
  module.exports = require('./prod.js');
} else {
  module.exports = require('./dev.js');
}
