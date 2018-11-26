const config = require("./config.json");
const Discord = require("discord.js");
const fs = require("fs");

const prefix = config.prefix;

const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

fs.readdir("./cmds/", (err, files) => {
  if(err) console.error(err);

  let jsfiles = files.filter(f => f.split(".").pop() === "js")
  //take each element in array and run function f
  // .split splits string by delim .
  ///.pop takes last array
  if (jsfiles.length <= 0){
    console.log("No commands to load!");
    return;
  }

  console.log(`Loading ${jsfiles.length} commands!`);


  jsfiles.forEach((f, i) => {
    let props = require(`./cmds/${f}`);
    console.log(`${i + 1}: ${f}loaded!`);
    bot.commands.set(props.help.name, props);
  });
});


bot.on("ready", () => {
  console.log("PokeWeather is online!");
  bot.user.setActivity("v1.0.0", {type: "PLAYING"});

});

bot.on("message", async message => {
  if (message.author.bot) return;
  if (message.channel.type === "dm") return;

  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if (!command.startsWith(prefix)) return;

  let cmd = bot.commands.get(command.slice(prefix.length));
  if (cmd) cmd.run(bot, message, args);

});


bot.login(config.token);
