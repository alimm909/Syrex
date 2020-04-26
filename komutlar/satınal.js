const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Bot Satın Alma Yardım Menüsü`)
        .setDescription(` • | • Merhabalar, Sizlere 5 Senelik Tecrübe Sunuyoruz !\n\n  • | • Sizde Discord Botu Satın Almak İstiyorsanız **!canlıdestek** yazarak veya destek sunucumuza gelerek bizimle iletişim kurabilirsiniz.\n\n • | • Fiyatlar İçin Sitemize Göz Atın : [SİTEMİZ](https://satis.linlordscode.tk)\n`)  
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=702922751962382449&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/e8P8Z5h) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['satınal'],
  permLevel: 0,
};

exports.help = {
  name: 'diskoyardım',
  description: '',
  usage: ''
};