const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('702922751962382449') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('BLUE')
        .setTitle(`${client.user.username} - Oyun Listesi`)
        .setDescription(`• | **${ayarlar.prefix}kelime-tahmini** : Bot İle Kelime Tahmin Yarışması Oynarsınız  \`( #BETA )\`.\n • | **${ayarlar.prefix}adamasmaca** : Bot İle Adam Asmaca Oynarsınız. \`( #BETA )\`\n • | **${ayarlar.prefix}sayı-tahmini** : Bot İle Sayı Tahmini Oynarsınız. \`( #BETA )\``)  
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=702922751962382449&permissions=8&scope=bot) **|** [Destek Sunucusu](https://discord.gg/e8P8Z5h) **|** [Web Sitemiz](https://linlordscode.glitch.me/)`)        .setFooter(`SyreX | Bot Sürümü : v0.1 | Varsayılan Prefix : !`, client.user.avatarURL)
    return message.channel.sendEmbed(embed);
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['oyunlar'],
  permLevel: 0,
};

exports.help = {
  name: 'oyun',
  description: '',
  usage: ''
};