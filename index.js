'use strict';
const fs = require("fs");
let output = fs.readFileSync("economy.txt", "utf8");


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


/*client.on('guildMemberAdd', member=>{
  const channel = member.guild.channels.cache.find(ch => ch.name === '#welcome');
  
  if(!channel) return;

  channel.send('Welcome to the server, ${member}');
});*/


client.on('message', message => {
  var commands = ["n!help", "n!ping", "n!github", "n!invite"];
  var prefix = "n!";
  if (message.content.startsWith(prefix)){
   var args = message.content.split(' ').slice(1);
   var allArgs = args.join(' ');
   var cmd = (message.content.split(' ')[0]).substring(prefix.length).toLowerCase();

   if (cmd === "help"){
     message.channel.send("**The Current List Of Commands:**\n " + commands.join("\n "));
     //console.log("There was a client request");
   }
   
   else if (cmd === "ping"){
     message.channel.send("Pong!");
    //console.log("There was a client request");
   }
   else if (cmd === "github"){
    message.channel.send("https://github.com/LiamDonohue/Nebula-Discord-Bot");
    //console.log("There was a client request");
   }
   else if (cmd === "invite"){
     message.channel.send("https://discordapp.com/oauth2/authorize?client_id=703378972335145041&permissions=402849799&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot");
     //console.log("There was a client request");
   }
   else if (cmd === "eval"){
     try{
     eval(allArgs)
     }
     catch(err){throw err}
     
   }
  /* else if (cmd === "readtxt"){
     message.channel.send(output);
   }*/
   
   
   
   
   
   
   
   
   
   
   
   
   
   
    /*if(message.content == "help") {
    message.channel.send("```\nHere is the list of commands:\n 1. n!github: Displays GitHub link\n 2. n!ping : pings the bot\n 3. n!invite: sends the invite link\n```");
   }
    else if (message.content == "ping"){
    message.channel.send("Pong!");
  }
   else if(message.content == "github"){
    message.channel.send("https://github.com/LiamDonohue/Nebula-Discord-Bot");
  }
    else if(message.content == "invite"){
    message.channel.send("https://discordapp.com/oauth2/authorize?client_id=703378972335145041&permissions=402849799&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot");
  }*/

}
});

client.login(process.env.token);