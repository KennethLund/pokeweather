const Discord = module.require("discord.js");


module.exports.run = async (bot, message, args) => {
//    let bicon = bot.user.displayAvatarURL;
    let embed = new Discord.RichEmbed()
    .setDescription("Here's the weather for the next 24 hours:")
    .setColor("#4fd1dd")
  //  .setThumbnail(bicon)
    .addField("Today", "Monday 26th November 2018")
    .addField("10", ":cloud:️ Cloudy", inline = true)
    .addField("11", ":cloud:️ Cloudy", inline = true)
    .addField("12", ":cloud:️ Cloudy", inline = true)
    .addField("13", ":cloud:️ Cloudy", inline = true)
    .addField("14", ":cloud:️ Cloudy", inline = true)
    .addField("15", ":cloud:️ Cloudy", inline = true)
    .addField("16", ":cloud:️ Cloudy", inline = true)
    .addField("17", ":cloud:️ Cloudy", inline = true)
    .addField("18", ":cloud:️ Cloudy", inline = true)
    .addField("19", ":partly_sunny:️ Partly cloudy", inline = true)
    .addField("20", ":partly_sunny:️ Partly cloudy", inline = true)
    .addField("21", ":partly_sunny:️ Partly cloudy", inline = true)
    .addField("22", ":partly_sunny:️ Partly cloudy", inline = true)

    .addField("Tomorrow", "Tuesday 27th November 2018")
    .addField("05", ":sunny:️ Clear/sunny", inline = true)
    .addField("06", ":sunny:️ Clear/sunny", inline = true)
    .addField("07", ":sunny:️ Clear/sunny", inline = true)
    .addField("08", ":sunny:️ Clear/sunny", inline = true)
    .addField("09", ":sunny:️ Clear/sunny", inline = true)
    .addField("10", ":sunny:️ Clear/sunny", inline = true)
    .addField("11", ":sunny:️ Clear/sunny", inline = true)
    .addField("12", ":sunny:️ Clear/sunny", inline = true)

    .setFooter("I only know the weather for the hours shown above. Check back at 10:00 on Tuesday 27th November for a new forecast.")
    message.channel.send({embed: embed});
}

module.exports.help = {
  name: "weather"
}
