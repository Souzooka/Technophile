function GameConsole(systemName) {
  this.systemName = systemName;
}

GameConsole.prototype.play = function(game) {
  return String(this.systemName) + " plays " + String(game.title);
};

module.exports = GameConsole;