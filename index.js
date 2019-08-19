const Discord = require('discord.js');
const client = new Discord.Client();
const ncbi = require('node-ncbi');
const config = require('./config.json');
const pubmed = ncbi.pubmed;

console.log ("hello, world!")
client.on("message", message => {
    if (message.content == "pub") {
        message.channel.send("med")} {

        
    if (message.content == "diabetes") {
pubmed.search('2 type diabetes').then((results) => {
    var resultado = JSON.stringify(results)
    message.channel.send(resultado)
    console.log(results)
})

}}});

client.login(config.token);