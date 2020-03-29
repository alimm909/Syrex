const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Destek Sunucumuza Katılın!`, `[Tıkla](https://discord.gg/YETK66G)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['destek','sunucu'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "destek-sunucu",
  description: "destek-sunucu",
  usage: "destek-sunucu"
};
