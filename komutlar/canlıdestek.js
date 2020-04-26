const Discord = require('discord.js');

exports.run = async(client, message, args) => {
   
  let isEnabled;
  message.channel.send(`<a:onay:703842032501653566> **Canlı Destek Talebiniz işleme alınmıştı,yetkili ekibimiz birazdan sizinle ilgilenecektir.**<a:yukleniyor:703842036373258340>`);
  let chan = message.channel;
  let destekKanal = "703842499235545160";/// buraya canlı destek mesajı atılacak kanal idisi
  const embed = new Discord.RichEmbed()
      .addField('Dikkat', `Canlı Destek Talebi`)
      .setColor("RED")
      .addField(`Bilgiler`, `Sunucu: ${message.guild.name} \n Kanal: ${message.channel.name} \n Destek İsteyen: ${message.author.tag}`)
      .setFooter("SyreX | Canlı Destek")
  client.channels.get(destekKanal).send(embed);
  const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
    time: 0
  })
  client.channels.get(destekKanal).send(`<a:mavi:703842039426711593> <a:mavi:703842039426711593>**<@376329032339292191> Destek çağrısına bağlanmak için \`bağlan\`, iptal etmek için \`iptal\` yazınız.<a:mavi:703842039426711593> <a:mavi:703842039426711593>**`)
  collector.on('message', (message) => {
    if (message.content === 'iptal') collector.stop('aborted')
    if (message.content === 'bağlan') collector.stop('success')
  })
  collector.on('end', (collected, reason) => {
    if (reason === 'time') return message.channel.send(`<a:red:703842141620666409> **Canlı destek talebiniz zaman aşımına uğradı.**`)
    if (reason === 'aborted') {
      message.channel.send(`<a:red:703842141620666409>**Canlı destek talebiniz yetkili tarafından reddedildi.**`)
      client.channels.get(destekKanal).send(`**<a:red:703842141620666409> Canlı destek talebi reddedildi.**`)
    }
    if (reason === 'success') {
      client.channels.get(destekKanal).send(`**<a:onay:703842032501653566> Canlı destek talebi kabul edildi. İptal etmek için \`iptal\` yazınız.**`)
      chan.send(`**<a:onay:703842032501653566>  ${message.author}, canlı destek talebiniz yetkili tarafından kabul edildi. İptal etmek için \`iptal\` yazınız.**`)
      isEnabled = true
      client.on('message', message => {
        function contact() {
          if (isEnabled === false) return
          if (message.author.id === client.user.id) return
          if (message.content.startsWith('iptal')) {
            message.channel.send(`**<a:red:703842141620666409> Canlı destek talebini iptal ettiniz.\n<a:gg:692365557839691809> SyreX Bot olarak sizlere iyi bir hizmet sağlayabildiysek ne mutlu bize,iyi günler.**`)
            if (message.channel.id === chan.id)
              client.channels.get(destekKanal).send(`**<a:red:703842141620666409> Canlı destek talebi kullanıcı tarafından iptal edildi.**`)
            if (message.channel.id === destekKanal) 
              chan.send(`<a:red:703842141620666409> Canlı destek talebiniz yetkili tarafından iptal edildi.\n<a:gg:692365557839691809> SyreX Bot olarak sizlere iyi bir hizmet sağlayabildiysek ne mutlu bize,iyi günler.**`)
            return isEnabled = false
          }
          if (message.channel.id === chan.id) 
            client.channels.get(destekKanal).send(`**Talepte Bulunan Kişi : ${message.author.tag}** : ${message.content}`)
          if (message.channel.id === destekKanal) 
            chan.send(`**Yetkili :** ${message.content}`)
        }
        contact(client)
      })
    }
  })
}

  exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['canlı', 'canlıdestek'],
  permLevel: 0
};

exports.help = {
  name: 'canlıdestek',
  description: 'Yetkililerle canlı desteğe geçersiniz.',
  usage: 'canlıdestek'
};