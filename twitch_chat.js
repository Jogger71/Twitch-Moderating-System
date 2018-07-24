const $ = require('jquery');
//const boostrap = require('bootstrap');

const tmi = require('tmi.js');
//npm const haikudos = require('haikudos');

let commandPrefix = '!';

const Chat = require('./models/chat');

//  Create the chats
const chatOne = new Chat(1);
const chatTwo = new Chat(2);
const chatThree = new Chat(3);
const chatFour = new Chat(4);
const chatFive = new Chat(5);
const chatSix = new Chat(6);

let options = {
  options: {
    debug: true
  },
  identity: {
    username: 'Jogger71',
    password: 'oauth:h1h2pbqeqfav5vl0y8m9sq7omm3c61',
  },
  channels: [],
};

let client = new tmi.client(options);

//  Add the handlers
client.on('message', onMessageHandler);

let channelOneName = '#jogger71';
let channelTwoName = '#joggerthelurklord';
let channelThreeName = '#noobsliceza';

//  Connect to Twitch
client.connect().then(function (data) {
  console.log('connected');
  console.log(data, 'Connection data');
  client.join(channelOneName);
  chatOne.setChannelName(channelOneName);
  client.join('#joggerthelurklord');
  chatTwo.setChannelName('#joggerthelurklord');
  client.join(channelThreeName);
  chatThree.setChannelName(channelThreeName);
}).catch(function(err) {
  console.log('error occurred');
  console.log(err);
});

function onMessageHandler(target, context, msg, self) {
  chatOne.messageReceived(target, context, msg);
  chatTwo.messageReceived(target, context, msg);
  chatThree.messageReceived(target, context, msg);
  chatFour.messageReceived(target, context, msg);
}