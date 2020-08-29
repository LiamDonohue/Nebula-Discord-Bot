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
  var commands = ["n!help", "n!ping", "n!github", "n!invite", "n!mimic", "n!welp", "n!rage", "n!eval", "I will soon do Moderation commands. Please ask @liamdonohue#4521 for help"];
  var prefix = "n!";
  if (message.content.startsWith(prefix)) {
    var args = message.content.split(' ').slice(1);
    var allArgs = args.join(' ');
    var cmd = (message.content.split(' ')[0]).substring(prefix.length).toLowerCase();

    if (cmd === "help") {
      message.channel.send("**The Current List Of Commands:**\n " + commands.join("\n "));
      //console.log("There was a client request");
    }

    else if (cmd === "ping") {
      message.channel.send("Pong! I am online");
      //console.log("There was a client request");
    }
    else if (cmd === "github") {
      message.channel.send("https://github.com/LiamDonohue/Nebula-Discord-Bot");
      //console.log("There was a client request");
    }
    else if (cmd === "invite") {
      message.channel.send("https://discordapp.com/oauth2/authorize?client_id=703378972335145041&permissions=402849799&redirect_uri=https%3A%2F%2Fdiscordapp.com%2Fapi%2Foauth2%2Fauthorize&scope=bot");
      //console.log("There was a client request");
    }

    else if (cmd === "rage") {
      message.channel.send("(ノ°Д°）ノ︵ ┻━┻");
    }
    else if (cmd === "welp") {
      message.channel.send("`¯\_(ツ)_/¯`")
    }

    if (cmd === "n!kick") {
      // Assuming we mention someone in the message, this will return the user
      // Read more about mentions over at https://discord.js.org/#/docs/main/master/class/MessageMentions
      const user = message.mentions.users.first();
      // If we have a user mentioned
      if (user) {
        // Now we get the member from the user
        const member = message.guild.member(user);
        // If the member is in the guild
        if (member) {
          /**
           * Kick the member
           * Make sure you run this on a member, not a user!
           * There are big differences between a user and a member
           */
          member
            .kick('Optional reason that will display in the audit logs')
            .then(() => {
              // We let the message author know we were able to kick the person
              message.reply(`Successfully kicked ${user.tag}`);
            })
            .catch(err => {
              // An error happened
              // This is generally due to the bot not being able to kick the member,
              // either due to missing permissions or role hierarchy
              message.reply('I was unable to kick the member');
              // Log the error
              console.error(err);
            });
        } else {
          // The mentioned user isn't in this guild
          message.reply("That user isn't in this guild!");
        }
        // Otherwise, if no user was mentioned
      } else {
        message.reply("You didn't mention the user to kick!");
      }
    }

  }

});

client.login(process.env.token);