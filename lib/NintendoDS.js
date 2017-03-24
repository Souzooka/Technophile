const GameConsole = require('./GameConsole.js');
const WebBrowser = require('./WebBrowser.js');

function NintendoDS() {
  GameConsole.call(this, 'Nintendo DS');
}

function inherit(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
}

inherit(NintendoDS.prototype, GameConsole.prototype);
inherit(NintendoDS.prototype, WebBrowser.prototype);

module.exports = NintendoDS;