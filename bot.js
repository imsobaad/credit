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


  client.on('message',async message => {
    var prefix = "."
    if(message.content.startsWith(prefix + "restart")) {
        if(message.author.id !== "486200045008453635") return message.reply('You aren\'t the bot owner.');
        message.channel.send('**Restarting.**').then(msg => {
            setTimeout(() => {
               msg.edit('**Restarting..**');
            },1000);
            setTimeout(() => {
               msg.edit('**Restarting...**');
            },2000);
        });
        console.log(`${message.author.tag} [ ${message.author.id} ] has restarted the bot.`);
        console.log(`Restarting..`);
        setTimeout(() => {
            client.destroy();
            client.login('process.env.BOT_TOKEN');
        },3000);
    }
});







client.login(process.env.BOT_TOKEN);
