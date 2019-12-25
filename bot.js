const Discord = require('discord.js');
var prefix = ("[your prefx here]")
const bot = new Discord.Client({disableEveryone: true})
var activity = (['your activity here'])


bot.on("ready", async () => {
    console.log(`Logged in as ${bot.user.tag}`);
    bot.user.setActivity(activity)
})


bot.on("message", /*async*/ message => {
    if(message.content === prefix + "ping") return message.channel.send('pong');

// spamming
if(message.content === (prefix + 'startSpam' )) return message.channel.send(prefix + "startSpam");

if(message.content === ('[your phrase here]')) return message.channel.send('[your phrase here]')
})

bot.login(token)