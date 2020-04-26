const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Yapılan Yenilikler`)
        .setDescription(` **• \`!yardım\` Menüsü Düzenlendi,Tüm Komutların Açıklaması Eklendi.\n• Ayarlanabilir Kayıt Sistemi Eklendi : \`!kayıtsistemi\`\n• Bazı Oyunlar Eklendi : \`!oyunlar\` \n• Bazı Komut Bugları Düzeltildi.\n• Botun Gecikme Süresi Azaltıldı.\n\n• SyreX v0.2 Sürümüyle Karşınızda !**`)  
        .setThumbnail(client.user.avatarURL)
.addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=702922751962382449&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/e8P8Z5h) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)        .setFooter(`SyreX | Bot Sürümü : v0.2 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yenilikler','yeni'],
  permLevel: 4,
};

exports.help = {
  name: 'yenilik',
  description: '',
  usage: ''
};