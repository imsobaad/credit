const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require(`enmap`);
const farm = new Enmap();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('ready', async() => {
var server = "494976575348146176"; // ايدي السيرفر
var channel = "512366415676702724";// ايدي الروم
    setInterval(()=>{
    client.guilds.get(server).channels.get(channel).send('Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,Darkness Spam ,Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam , Darkness Spam ,  ')
    },305);
})


client.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});



        var prefix = "0";
    client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;
 
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
 
  let args = message.content.split(" ").slice(1);
 
  if (command == "say") {
if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('?|**\`ADMINISTRATOR**');
 
 
   message.channel.sendMessage(args.join("  "))
   message.delete()
  }
 });






client.login(process.env.BOT_TOKEN);
