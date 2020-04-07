const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(` • | **!davetsistemi** : Davet Sistemi Hakkında Bütün Bilgileri Görürsünüz.\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=677145750043361320&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/YETK66G) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','help','h'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};