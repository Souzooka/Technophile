const Watch = require('./Watch.js');
const Tablet = require('./Tablet.js');

function SmartWatch() {
  Watch.call(this);
}

function inherit(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
}

inherit(SmartWatch.prototype, Watch.prototype);
inherit(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;