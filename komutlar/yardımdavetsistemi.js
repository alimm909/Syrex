const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('602024501710159882') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Davet Sistemi Komut Listesi`)
        .setDescription(` • | **${ayarlar.prefix}davet-kanal** : Davet Mesajlarının Gönderileceği Kanalı Belirtirsiniz.\n\n • | **${ayarlar.prefix}davet-kanal-sıfırla** : Ayarlanmış Davet Kanalını Sıfırlarsınız.\n\n • | **${ayarlar.prefix}davet-ekle** : Etiketlediğiniz Kullanıcıya Belirttiğiniz Kadar Davet Sayısı Eklersiniz.\n\n • | **${ayarlar.prefix}davet-sil** : Etiketlediğiniz Kullanıcıdan Belirttiğiniz Kadar Davet Sayısı Silersiniz.\n\n • | **${ayarlar.prefix}davet-sıfırla** : Etiketlediğiniz Kullanıcının Davet Sayısını Sıfırlarsınız.\n\n • | **${ayarlar.prefix}davet-stokla** : Herhangi Bir İşlevi Yoktur,Test Komutudur :)\n\n • | **${ayarlar.prefix}davetlerim** : Kendi Davetlerinizi Gösterir.\n\n • | **${ayarlar.prefix}davetsay** : Etiketlediğiniz Kullanıcının Davet Sayısına Bakarsınız.\n\n • | **${ayarlar.prefix}davet-oluştur** : Sunucuya Ait Bir Davet Linki Oluşturursunuz.\n\n▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬ **\`Rütbe Sistemi\`** ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬\n\n • | **${ayarlar.prefix}rütbe-ekle** : Sunucunuza Yapılan Davet Sayısına Göre Rütbe(Rol) Seviyesi Oluşturursunuz.\n\n • | **${ayarlar.prefix}rütbe-sil** : Eklediğiniz Rütbe Seviyesini Silersiniz.\n\n • | **${ayarlar.prefix}rütbe-liste** : Sunucuya Eklenilen Rütbe Seviyelerini Listelersiniz.`)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=677145750043361320&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/YETK66G) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`SyreX | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['davetsistemi', 'davet-sistemi'],
  permLevel: 0,
};

exports.help = {
  name: 'davetsistemi',
  description: '',
  usage: ''
};