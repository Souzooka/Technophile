const GameConsole = require('./GameConsole.js');
const WebBrowser = require('./WebBrowser.js');
const inherit = require('./helpers/inherit.js');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

inherit(NintendoDS.prototype, GameConsole.prototype);
inherit(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;