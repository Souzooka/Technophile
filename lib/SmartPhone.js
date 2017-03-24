const Phone = require('./Phone.js');
const Tablet = require('./Tablet.js');
const GameConsole = require('./GameConsole.js');
const WebBrowser = require('./WebBrowser.js');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber); // You used to call me on your cellphone;
  GameConsole.call(this, 'Smart Phone');
}

function inherit(destination, source) {
  for (var k in source) {
    if (source.hasOwnProperty(k)) {
      destination[k] = source[k];
    }
  }
}

inherit(SmartPhone.prototype, Phone.prototype);
inherit(SmartPhone.prototype, Tablet.prototype);
inherit(SmartPhone.prototype, GameConsole.prototype);
inherit(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;