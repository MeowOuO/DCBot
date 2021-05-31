const Discord = require('discord.js');
const { token } = require('./Giroro.json');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '共鳴') {
        msg.reply('GiroGiroGiro~~');
    }
});

client.login(token);