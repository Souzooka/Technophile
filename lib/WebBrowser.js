function WebBrowser() {}

WebBrowser.prototype.open = function(url) {
  return "Browsing to " + String(url);
};

module.exports = WebBrowser;