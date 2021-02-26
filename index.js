'use strict';



const express = require('express');
const app = express();

app.listen(() => console.log("Server started"));

app.use(express.static("./public", {index: `index.html`}))


const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
   client.user.setPresence({ activity: { name: 'f!help' }, status: 'online'})
  .then(console.log)
  .catch(console.error);
});



/*client.on('guildMemberAdd', member=>{
  const channel = member.guild.channels.cache.find(ch => ch.name === '#welcome');
  
  if(!channel) return;

  channel.send('Welcome to the server, ${member}');
});*/




client.on('message', message => {
 
  //const args = message.content.slice(prefix.length).trim().split(/ +/);
  var commands = ["s!help", "s!ping", "s!help [Enter topic here]"];
  var prefix = "s!";
  if (message.content.startsWith(prefix)) {
   const args = message.content.slice(prefix.length).trim().split(/ +/);
    var cmd = (message.content.split(' ')[0]).substring(prefix.length).toLowerCase();

    if (cmd === "commands") {
      message.channel.send("**The Current List Of Commands:**\n " + commands.join("\n "));
      //console.log("There was a client request");
    }

    else if (cmd === "ping") {
      message.channel.send("Pong! I am online");
      //console.log("There was a client request");
    }
    //companies help
   else if (cmd === "companies"){
     message.channel.send("**Companies**\nA company is a player run organization within Campaign mode. One player will serve as the CEO of the company and makes all decisions on behalf of the company. The CEO can hire other willing players to be employees in their company. Employees can help build and design crafts, pilot missions, or manage the company. There are no rules as to how a company is structured, so there is total freedom for the CEO and their employees to make it as simple or complex as they want. To start a company, send a message in the #the-flight-administration channel, asking for approval for your company. You’ll need a name for your company, logos, slogans, fliers, and superbowl ads are all optional but highly encouraged. Have fun with it! Once a company is approved, a moderator will create a custom channel for that company, as well as track the funds for that company. CEOs can use their company channel to communicate with their employees, share craft files, photos, memes, literally whatever they want. It is recommended that after creating their company, a CEO writes their own rules and pins it in their company text channel. It’s not required, but it is encouraged. There is a limit of how many companies can exist at a time. Companies that go inactive for long periods of time will close and allow for new companies to open in their place. Once the server is at its maximum capacity for companies, new players can join other companies to gain experience and reputation within the server and earn extra money to start their own company.");
   }
   //money command
   else if(cmd === "money"){
     message.channel.send("**Money**\nCompanies use money to build rockets, pay employees, and upkeep their space infrastructure. Starting out, a company is given an initial investment of $10M. They can use this to build rockets. At the bottom of the designer screen is a price tag for the craft. If that craft is used in an official mission for a contract or space infrastructure, then the price of the craft is deducted from the company's funds. If a company reaches $0 in funds, they can declare bankruptcy. When a company goes bankrupt, they receive a $10M loan and can start over. All space infrastructure owned at the time are deactivated, and must be reactivated before they can start operating them again. Companies can loan money to other companies at whatever agreed upon interest rate between the CEOs. Companies can also buy hardware from other companies. Companies can directly purchase a vehicle for their own use at an agreed upon rate, or higher another company to fly their own missin for them. Negotiations on price can occur in the #ceo-chat channel. The cost of a mission is equal to the cost of the craft, times any modifier for the mission. Missions that are launched from a non standard launch site have an extra cost modifier added to them. Missions that are reusable and can be relaunched multiple times have a discount applied to them according to the degree to which the mission is reusable. Companies can also purchase the rights to use a different company’s craft for a mission. The company pays for the mission normally, plus an additional 25% to the original creator of the craft. Company’s can make their money just by selling crafts to other companies.");
   }
   //research command
   else if(cmd === "research"){
     message.channel.send("Not every piece of technology is immediately available to you when you start your company. Technologies have to be unlocked over time by doing research and gathering science points. These science points can then be spent to unlock new technologies and advance your companies capabilities. There are a few different ways to collect science points. You can add science parts to your crafts while performing contract missions. This allows you to kill two birds with one stone, completing a contract while also gathering some scientific data. You can launch missions specifically to gather scientific data. While more costly this gives you the option of choosing where you go to gather research points instead of being bound by mission constraints. The last way to gather science points is to build space infrastructure that supports research. This isn’t immediately available but opens up as you unlock more technologies in the tech tree. The ‘Astronomy’ technology lets you gather science points by building space telescopes and ground observatories. These gather science points for your company over time, as opposed to instantly generating science points. By researching ‘Manned Space Flight’ you can collect science points by putting Droonauts on your missions. Droonauts can perform EVAs and mission reports, which give science points. You can also have Droonauts live in space aboard space stations and planetary bases. As part of their day to day life in space, Droonauts perform scientific experiments and gain science points. The science point cost to unlock a new technology is the same for all technologies within a Tier. Starting out, each company will have all Tier 0 Technologies and the Basic Solid rockets Technology from Tier I. ");
     message.channel.send("The rule of thumb for research is not to perform the same experiment under the same conditions. For instance, you can take multiple barometric pressure readings of Droo, but they can’t be at the same or nearly the same altitude. Likewise you can take many gravitometer reading, but at different orbits and inclinations. Each science part can only be used once per flight, but multiple parts can be attached to a craft for multiple readings. Multiple experiments of the same kind can be performed on the same mission, if the conditions around the experiment change (change in orbit for gravitometer and radiation detector, change in air density for barometer, etc). However the more you repeat an experiment in the same conditions, the less value the experiment becomes at an exponential rate. SP = C*2(1-i) Where C is the initial value of the experiment and i is the number of times the experiment is repeated. This comes out to be half the value of the previous experiment for every iteration. If an experiment is worth 20 science the first time it's used, it will be worth 10 the second, 5 the third, and so on. Data tends to be lost in transmission, so getting the experiments back physically can yield larger payouts of science. If you’re able to return your experiments to Droo, it doubles the scientific value of the experiments.\n ");
     message.channel.send("**Research Part List**\nThe following show what parts, fuels, and customizable characteristics get unlocked with each technology researched.\n\n\n**Tier 0**\n -*Basic Rocketry*\n-Fins\n -Fuel Tank\n -PBAN Solid Fuel\n-Nose Cone\n-Command Chip\n-Cone Nozzle\n-Camera\n-Fairings\n-Battery\n-Interstage\n*Atmospheric Flight*\n-Wings\n-Jet Engines\n-Jet Fuel\n-Barometer\n-Landing Gear");
     message.channel.send("**Tier I** \n\nGyroscopes\n -Gyroscope Part \n\nBasic Solid Rockets \n-Solid Rocket Engines\n-Echo Nozzle\n\n-Basic Liquid Rockets \n-Gas Generator 1 \n-Fuel Cycle Pressure Fed 1 \n-Fuel Cycle Redstone Nozzle Ethanol (75%) Fuel Kerosene\n-Liquid Fuel Methanol\n-Fuel Liquid Oxygen Oxidizer\n\nCommunications\n -Radio Antenna\n-Radio Dish\n\n Laboratories\n-Laboratory Infrastructure Mission");
   }
   

  }

});

client.login(process.env.token);