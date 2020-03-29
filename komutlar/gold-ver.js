const Discord = require('discord.js')
const db = require('quick.db')
const ayarlar = require('../ayarlar.json')
const client = new Discord.Client();
exports.run = async (client, message, args) => {
    const krm = client.emojis.get("691623355647918082")
    const dk = client.emojis.get("691622612358660139")
  
  let GoldPlayer = args[0]
  if (!GoldPlayer) return message.channel.send(krm+ " Bir ID Girmelisin")
 message.react('683327648436453517')
  db.set(`Gold_${GoldPlayer}`, 'Gold')
  message.channel.send(` **\`\`${GoldPlayer}\`\`** ID'sine Sahip <@${GoldPlayer}> Artık Gold Üye!`)
 message.react('683327648436453517')
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-yap"],
  permLevel: 4,
kategori : 'sahip'
};
exports.help = {
  name: 'gold-ver',
  description: 'Gold Üye He ? :D',
  usage: 'gold-yap'
};