const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('GREEN')
  .setFooter('Davet Sayaç  \' Bot İstatistikleri ', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<@533292083172081695>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" ,      bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**",      bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**",      bot.channels.size.toLocaleString(), true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("**» Botu Davet Et**", " [Tıkla](https://discordapp.com/api/oauth2/authorize?client_id=690535412715880459&permissions=8&scope=bot)", )
  .addField("**» Destek Sunucusu**", " [Tıkla](https://discord.gg/YETK66G)", )
  .addField("**» Sitemize Göz At ( YENİ )**", " [Tıkla](https://linlordscode.glitch.me/)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'bot'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};