const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Sayaç Komutları Listesi`)
        .setDescription(` • | **${ayarlar.prefix}sayaç** : Belirlediğiniz Hedefe Ulaşma Yolunda Üyelerinizi Sayar.\n • | **${ayarlar.prefix}sayaç-sıfırla** : Ayarlanmış Sayaç Sistemini Sıfırlarsınız.\n • | **${ayarlar.prefix}otorol-mesaj** : Otorol Uygulandığında Gönderilecek Mesajı Oluşturursunuz.\n • | **${ayarlar.prefix}otorol-mesaj-sıfırla** : Otorol Mesajını Sıfırlarsınız.`)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=677145750043361320&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/YETK66G) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`SyreX | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['otomatikrol','otorol-sistemi','otorolsistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'otorolsistemi',
  description: '',
  usage: ''
};