const $ = require('jquery');

function Stream(channel = null, index = 0) {
  this.channel = channel;
  this.index = index;
  this.twitchPlayer = null;

  if (this.getIndex() > 0) {
    this.setupPlayer();
  }
}

Stream.prototype.setChannelName = function(channel) {
  this.channel = channel;
};

Stream.prototype.getChannelName = function() {
  return this.channel;
};

Stream.prototype.setIndex = function(index) {
  this.index = 0;
};

Stream.prototype.getIndex = function() {
  return this.index;
};

Stream.prototype.getPlayerId = function() {
  if (this.getIndex() > 0) {
    return 'stream-' + this.getIndex().toString();
  }
};

Stream.prototype.setupPlayer = function() {
  if (this.getIndex() > 0) {
    this.twitchPlayer = new Twitch.Player(this.getPlayerId(), {});
  }
};

Stream.prototype.getPlayer = function() {
  return this.twitchPlayer;
};

Stream.prototype.loadStream = function() {
  if (this.twitchPlayer === null) {
    this.setupPlayer();
  }

  if (this.getPlayer() !== null && this.getChannelName() !== null) {
    this.twitchPlayer.setChannel(this.getChannelName());
  }
};

module.exports = Stream;