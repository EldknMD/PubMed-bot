const Discord = require('discord.js');
const client = new Discord.Client();
const Pubmed = require('node-ncbi');
const config = require('./config.json');

console.log ("hello, world!")
client.on("message", message => {
    if (message.content == "pub") {
        message.channel.send("med")

    }
})
client.login(config.token);