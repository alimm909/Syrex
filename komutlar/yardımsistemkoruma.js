const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Koruma Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}rol-koruma** : Rol Koruma Sistemini Açarsınız.\n • | **${ayarlar.prefix}rol-koruma-sıfırla** : Rol Koruma Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}kanal-koruma** : Kanal Koruma Sistemini Açarsınız.\n • | **${ayarlar.prefix}kanal-koruma-sıfırla** : Kanal Koruma Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}reklam-engel** : Reklam Koruma Sistemini Açıp Kapatırsınız.\n • | **${ayarlar.prefix}ever-engel** : Everyone Kullanımlarını Tamamı İle Engeller.`)  
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=702922751962382449&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/e8P8Z5h) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)        .setFooter(`SyreX | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['koruma','korumasistemi','koruma-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'koruma',
  description: '',
  usage: ''
};