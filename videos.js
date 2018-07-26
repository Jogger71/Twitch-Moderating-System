const $ = require('jquery');
const Stream = require('./models/stream');

const channelOne = "giraffe_monster";
const channelTwo = "";
const channelThree = "";
const channelFour = "";
const channelFive = "";
const channelSix = "";

let streamOne = new Stream(channelOne, 1);
let streamTwo = new Stream("", 2);
let streamThree = new Stream("", 3);
let streamFour = new Stream("", 4);
let streamFive = new Stream("", 5);
let streamSix = new Stream("", 6);

streamOne.loadStream();
streamTwo.loadStream();
streamThree.loadStream();
streamFour.loadStream();
streamFive.loadStream();
streamSix.loadStream();