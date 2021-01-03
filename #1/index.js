const Discord = require("discord.js");//discord.js modülümüzü tanımladık.
const config = require("./config.json");//config.json dosyamızı tanımladık.

const client = new Discord.Client();//botumuzu tanımladık.


client.on('ready', () => {
    console.log(`${client.user.username} Adlı Bot Aktif Hale geldi`);
  });//Botumuza bir event(olay ekledik). Artık Botumuz aktif olduğunda bu eventimiz çalışacak.


  //Her mesaj geldiğinde bu event tetiklencek ve çalışacak
client.on('message', message => {

    //mesajın içeriği büyük,küçük harf farketmeksizin 'merhaba' olduğunda tetiklencek.     
     if(message.content.toLowerCase() === 'merhaba'){

      //Cevap olarak 'Merhaba!' cevabını verecek.
        message.reply('Merhaba!');
        
     }

     //Burada mesajımızın başına prefiximizi ekledik.
     if(message.content.toLowerCase() === config.prefix+'ping'){

      message.reply('Benim pingim: **'+ client.ws.ping+'**ms');
      
   }
});







client.login(config.token);//botumuzu aktif hale getirdik.