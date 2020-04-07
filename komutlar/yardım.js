const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Yardım Menüsü`)
        .setDescription(` • | **${ayarlar.prefix}davetsistemi** : Davet Sistemi Hakkında Bütün Bilgileri Listelersiniz.\n • | **${ayarlar.prefix}say** : Sunucuda Bulunan Üyeleri & Botları Ayrıntılı Olarak Gösterir.\n • | **${ayarlar.prefix}ping** : Botun Ping Değerini Gösterir.\n • | **${ayarlar.prefix}prefix** : Botun Sunucudaki Prefixini Değiştirirsiniz.\n • | **${ayarlar.prefix}prefix-sıfırla** : Botun Sunucudaki Prefixini Varsayılana Çevirirsiniz.\n • | **${ayarlar.prefix}satınal** : Bizden Bot Satın Almak İsteyenler İçin Oluşturulmuş Bir Paneldir.\n • | **!davet** : Botun Davet Linkini Görüntülersiniz.\n • | **${ayarlar.prefix}destek-sunucu** : Botun Destek Sunucusunu Görüntülersiniz.\n • | **${ayarlar.prefix}site** : Sitemizi Görüntülersiniz.`)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=677145750043361320&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/YETK66G) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`SyreX | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','y','h','help'],
  permLevel: 0,
};

exports.help = {
  name: 'yardım',
  description: '',
  usage: ''
};