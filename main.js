const Discord = require("discord.js");
const { red, green, blue, yellow, cyan, greenBright, cyanBright, yellowBright } = require('chalk');
const client = new Discord.Client({ ws: { large_threshold: 100000, compress: true } });






client.on('ready', () => {
    console.log(red('              ════════════════════════════════════════════════════════════════════════════════'));
    console.log(greenBright(`                                           User: ${client.user.username}#${client.user.discriminator}`));
    console.log(red('              ════════════════════════════════════════════════════════════════════════════════'));

    client.user.friends.forEach((f) => f.dmChannel.fetchMessages({ limit: 100 }).then(msgs => msgs.filter(m => m.author.id === client.user.id).map(m => m.delete())).then(console.log(greenBright(
        `${f.username}'s DMs are being Purged.`
    ))).catch(e => {
        console.error(red(`Couldn't Purge ${f.username}`))
    }))

});



client.login("token here");
