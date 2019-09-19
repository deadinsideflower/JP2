const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Wyruszam w watykan ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'Kremowka') {
    msg.reply('Jeszcze jak');
  }
});

client.login('NjIzOTU2MzMxNTc3MDgxODk2.XYPOVQ.h5r5_veogRVhKp_GXXuaIjFTW38');