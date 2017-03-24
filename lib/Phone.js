function Phone(phoneNumber) {
  this.phoneNumber = phoneNumber;
}

Phone.prototype.callPhone = function(phoneNumber) {
  return String(this.phoneNumber) + " calls " + String(phoneNumber);
};

module.exports = Phone;