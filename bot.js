var ServerID = "494976575348146176"; //اي دي السيرفر
var ChannelID = "512366415676702724";// اي دي الروم


const Discord = require('discord.js');
const client = new Discord.Client();
const client2 = new Discord.Client();
const client3 = new Discord.Client();
const client4 = new Discord.Client();
const client5 = new Discord.Client();
const client6 = new Discord.Client();
const client7 = new Discord.Client();
const client8 = new Discord.Client();
const client9 = new Discord.Client();
const client0 = new Discord.Client();


client.on('warn', console.warn);

client.on('error', console.error);



client2.on('ready', () => console.log('ProBot Credits Miner Discord.js Script'));

client2.on('disconnect', () => console.log('PROBOT credits miner had disconnected!'));

client2.on('reconnecting', () => console.log('PROBOT credits miner is reconnecting...'));


function timerFunc() {
    client.on('message', msg => {
        client.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client2.on('message', msg => {
        client2.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client3.on('message', msg => {
        client3.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client4.on('message', msg => {
        client4.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client5.on('message', msg => {
        client5.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client6.on('message', msg => {
        client6.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client7.on('message', msg => {
        client7.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client8.on('message', msg => {
        client8.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client9.on('message', msg => {
        client9.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);

function timerFunc() {
    client0.on('message', msg => {
        client0.guilds.get(ServerID).channels.get(ChannelID).send(Math.random().toString(36).substring(7))


    });
}

var timer = setTimeout(timerFunc, 1000);


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

client2.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client2.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client3.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client3.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client4.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client4.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client5.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client5.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client6.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client6.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client7.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client7.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client8.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client8.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client9.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client9.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client0.on('message', message => {
    if(message.content === 'daily'){
        message.channel.send('#daily')
    }
});

client0.on('message', message => {
    if(message.content === 'rep'){
        message.channel.send('#rep <@486200045008453635>')
    }
});

client.login(process.env.BOT_TOKEN);
client2.login(process.env.BOT_TOKEN2);
client3.login(process.env.BOT_TOKEN3);
client4.login(process.env.BOT_TOKEN4);
client5.login(process.env.BOT_TOKEN5);
client6.login(process.env.BOT_TOKEN6);
client7.login(process.env.BOT_TOKEN7);
client8.login(process.env.BOT_TOKEN8);
client9.login(process.env.BOT_TOKEN9);
client0.login(process.env.BOT_TOKEN0);
