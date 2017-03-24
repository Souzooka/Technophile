const Watch = require('./Watch.js');
const Tablet = require('./Tablet.js');
const inherit = require('./helpers/inherit.js');

function SmartWatch() {
  Watch.call(this);
}

inherit(SmartWatch.prototype, Watch.prototype);
inherit(SmartWatch.prototype, Tablet.prototype);

module.exports = SmartWatch;