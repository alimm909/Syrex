const Discord = require("discord.js");

module.exports.run = async (client, message) => {
  
  const embed = new Discord.RichEmbed()
    .setColor("BLACK")
    .addField(`Destek Sunucusu`, `[TIKLA](https://discord.gg/YETK66G)`)
    .addField(`Sitemiz`, `[TIKLA](https://linlordscode.glitch.me/)`)
    .addField(`Botu Ekleyin!`, `[TIKLA](https://discordapp.com/api/oauth2/authorize?client_id=693700087012130877&permissions=8&scope=bot)`)
.setFooter(client.user.username, client.user.avatarURL)

  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "sunucu",
  description: "destek",
  usage: "destek"
};
