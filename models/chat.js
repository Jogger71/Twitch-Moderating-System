const $ = require('jquery');

function Chat(chatIndex = 0, channelName = null) {
  this.channelName = null;
  this.chatIndex = 0;
  this.chatWrapper = null;

  if (chatIndex !== 0) {
    this.setupChat(chatIndex, channelName);
  }
}

Chat.prototype.setChannelName = function(channelName) {
  this.channelName = (channelName === '' || channelName === null) ? 'Not Connected' : channelName;
  this.updateChannelName();
};

Chat.prototype.getChannelName = function() {
  return this.channelName;
};

Chat.prototype.updateChannelName = function() {
  if (this.chatWrapper !== null) {
    this.chatWrapper.find('.channel-name').text(this.getChannelName());
  }
};

Chat.prototype.setChatIndex = function(index) {
  this.chatIndex = index;
  this.createChatWrapper();
};

Chat.prototype.getChatIndex = function() {
  return this.chatIndex;
};

Chat.prototype.createChatWrapper = function() {
  let chatWrapperSelector = '.chat[data-channel-number="' + this.getChatIndex().toString() + '"]';
  this.chatWrapper = $(chatWrapperSelector);
  console.log(this.chatWrapper, 'chatWrapper');
};

Chat.prototype.disconnect = function() {
  this.setChannelName("Not Connected");
};

Chat.prototype.setupChat = function(chatIndex, channelName) {
  this.setChatIndex(chatIndex);
  this.setChannelName(channelName);
};

Chat.prototype.createMessage = function(messageText, context) {
  let message = $(document.createElement('div'));
  message.addClass('twitch-message');
  let username = $(document.createElement('span'));
  username.attr('style', 'color: ' + context['color']);
  username.addClass('twitch-username');
  username.text(context['display-name']);
  let msgText = $(document.createElement('span'));
  msgText.text(': ' + messageText);
  message.append(username);
  message.append(msgText);
  return message;
};

Chat.prototype.addMessage = function(message) {
  if (this.chatWrapper !== null) {
    this.chatWrapper.find('.message-container').append(message);
  }
};

Chat.prototype.messageReceived = function(channel, context, messageText) {
  console.log('Message Received');
  if (channel === this.getChannelName()) {
    this.addMessage(this.createMessage(messageText, context));
    console.log('Message Processed');
  }
};

module.exports = Chat;