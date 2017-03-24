const Phone = require('./Phone.js');
const Tablet = require('./Tablet.js');
const GameConsole = require('./GameConsole.js');
const WebBrowser = require('./WebBrowser.js');
const inherit = require('./helpers/inherit.js');

function SmartPhone(phoneNumber) {
  Phone.call(this, phoneNumber); // You used to call me on your cellphone;
  GameConsole.call(this, 'Smart Phone');
}

inherit(SmartPhone.prototype, Phone.prototype);
inherit(SmartPhone.prototype, Tablet.prototype);
inherit(SmartPhone.prototype, GameConsole.prototype);
inherit(SmartPhone.prototype, WebBrowser.prototype);

module.exports = SmartPhone;