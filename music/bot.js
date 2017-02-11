const auth = require('../auth.js');
const Discord = require('discord.js');
const bot = new Discord.Client({
    disabledEvents: ["TYPING_START"],
    messageCacheMaxSize: 100,
    fetchAllMembers: true
  });
module.exports.bot = bot;
require('./func/loadCommands').load();
require('./func/config')
require('./events/message.js');

bot.on('ready', () => {
  console.log("Music Module Started")
})

bot.login(auth.auth.token);