const Discord = module.require("discord.js");

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.displayAvatarURL;
  let embed = new Discord.RichEmbed()
  .setDescription("Bot Information:")
  .setColor("#4fd1dd")
  .setThumbnail(bicon)
//  .addField("Bot name", bot.user.username)
  .setDescription("**PokeWeather**: A weather forecasting service for Pokemon Go")
  .addField("Authors", "Suzi Ross and Kenneth Lund")
  .addField("Github", "[https://github.com/suziguitar/pokeweather](https://github.com/suziguitar/pokeweather)")
  .addField("Created on", bot.user.createdAt)
  .setFooter("This project is licensed under the terms of the MIT license.")

  message.channel.send({embed: embed});
}

module.exports.help = {
  name: "info"
}
