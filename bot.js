const Discord = require("discord.js");
const client = new Discord.Client();
const Enmap = require(`enmap`);
const farm = new Enmap();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

function randomIntFromInterval(min,max){
    return Math.floor(Math.random()*(max-min+1)+min);
}

client.on('message', msg => {
    let ownerid = '486200045008453635';
    if(msg.author.id === ownerid){
        if(msg.content === "farm"){
            if(msg.channel.id !== "512366415676702724") return;
            let count = 0;
            farm.set(`farm`, 'true')
            setInterval(function(){
                setTimeout(function(){
                    if(farm.get(`farm`) !== 'true') return;
                    count++;
                    msg.channel.send(`${randomIntFromInterval(1135,1234)}${randomIntFromInterval(1135,1334)}${randomIntFromInterval(1135,1534)} #${count}`)
                }, randomIntFromInterval(250, 300))
            }, randomIntFromInterval(1119, 2119))
        }
        if(msg.content.startsWith(`credits`)){
            if(msg.channel.id !== "512361949351378975") return;
            if(msg.isMentioned(client.user)){
                farm.set(`farm`, 'blah blah')
                let args = msg.content.split(` `)
                msg.channel.send(`#credits <@!${msg.author.id}> ${args[2]}`).then(()=>{
                    const filter = m => m.author.id === msg.author.id;
                    msg.channel.awaitMessages(filter, {max: 1, time: 29000}).then(col=>{
                        if(col.first().content === "cancel"){
                            return msg.reply(`Canceled!`);
                        }
                        msg.channel.send(`${col.first().content}`).then(()=> farm.set(`farm`, 'true'))
                    })
                })
            }
        }
    }else return;
});


  client.on('message',async message => {
    var prefix : "."
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
