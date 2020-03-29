const Discord = require("discord.js");
const db = require("quick.db");
const ayarlar = require("../ayarlar.json");
const client = new Discord.Client();

exports.run = async (client, message, args) => {

  const Hayir = client.emojis.get("669124699665727488");
  const Evet = client.emojis.get("683327664932782146");
  message.react("683327648436453517");
  let GoldPlayer = args[0];
  if (!GoldPlayer) return message.channel.send(Hayir + " Bir ID Girmelisin");
  message.react("683327648436453517");
  db.delete(`Gold_${GoldPlayer}`);
  message.channel.send(
    Evet +
      ` **\`\`${GoldPlayer}\`\`** ID'sine Sahip <@${GoldPlayer}> Artık Gold Üye Değil!`
  );
  message.react("683327648436453517");
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["gold-al"],
  permLevel: 4,
  kategori: "sahip"
};
exports.help = {
  name: "gold-kapat",
  description: "Gold Üye He ? :D",
  usage: "gold-Kapat"
};