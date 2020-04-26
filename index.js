'use strict';
const fs = require("fs");
let output = fs.readFileSync("economy.json", "utf8");
let data = JSON.parse(output);

console.log(data);

const express = require('express');
const app = express();

app.listen(() => console.log("Server started"));

app.use('/ping', (req, res) => {
  res.send(new Date());
});


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
client.on('guildMemberAdd', member=>{
  const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
  
  if(!channel) return;

  channel.send('Welcome to the server, ${member}');
});
client.on('message', message => {
  // Here is where you need to code
  if(message.content == "n!help") {
    message.channel.send("```\nHere is the list of commands:\n 1. n!github: Displays GitHub link\n 2. n!ping : pings the bot\n 3. n!invite: sends the invite link\n```");
  }
  else if (message.content == "n!ping"){
    message.channel.send("Pong!");
  }
  else if(message.content == "n!github"){
    message.channel.send("https://github.com/LiamDonohue/Nebula-Discord-Bot");
  }
  else if(message.content == "n!invite"){
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=703378972335145041&permissions=402849799&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot");
  }
  else if(message.content == "n!data")
  {
    console.log("I'm Controlling this from discord!")
  }
  
});

client.login(process.env.token);