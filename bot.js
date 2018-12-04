const Discord = require('discord.js');
const client = new Discord.Client();

client.on("message", (message) => {
  var sender = message.author
if(message.content.startsWith(prefix + 'daily')) {
if (games[sender.id].lastDaily != moment().format('day')) {
    games[sender.id].lastDaily = moment().format('day')
 games[message.author.id].credits += 200;
    message.channel.send(`**${message.author.username} you collect your \`200\` :dollar: daily pounds**`)
} else {
    message.channel.send(`**:stopwatch: | ${message.author.username}, your daily :yen: credits refreshes ${moment().endOf('day').fromNow()}**`)
}
}
})

client.on("message", (message) => {
  if (message.author.bot) return;
    if (message.author.id === client.user.id) return;
    if(!message.channel.guild) return;       
if (message.content === '#credits') {
message.channel.send(`** ${message.author.username}, your :credit_card: balance is ${games[message.author.id].credits}.**`)
}
});

client.on('message', message => {
    if (message.content.startsWith("link")) {
        if (message.author.bot) return
        message.channel.createInvite({
        thing: true,
        maxUses: 5,
        maxAge: 1,
    }).then(invite =>
        message.author.sendMessage(???)
    )
    const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
            .setDescription(" ?? ????? ?????? ?? ????? ?? ")
             .setAuthor(client.user.username, client.user.avatarURL)
                 .setAuthor(client.user.username, client.user.avatarURL)
                .setFooter('??? ??????: ' + message.author.tag)
 
        message.channel.sendEmbed(embed).then(message => {message.delete(10000)})
                const Embed11 = new Discord.RichEmbed()
        .setColor("RANDOM")
 
    .setDescription(" ??? ?????? :  24 ???? ???  ??? ????????? ?????? : 5 ")
        message.author.sendEmbed(Embed11)
    }










client.on('message', message => {
    var prefix = "$";
    
        if (message.author.id === client.user.id) return;
        if (message.guild) {
       let embed = new Discord.RichEmbed()
        let args = message.content.split(' ').slice(1).join(' ');
    if(message.content.split(' ')[0] == prefix + 'bc') {
        if (!args[1]) {
    message.channel.send("**f!bc <message>**");
    return;
    }
            message.guild.members.forEach(m => {
       if(!message.member.hasPermission('ADMINISTRATOR')) return;
                var bc = new Discord.RichEmbed()
                .addField(' » ??????? : ', args)
                .setColor('#ff0000')
                // m.send(`[${m}]`);
                m.send(`${m}`,{embed: bc});
            });
        }
        } else {
            return;
        }
    });
    
    
    





client.on('ready', () => {
   console.log(`----------------`);
      console.log(`skran`);
        console.log(`---------------`);
      console.log(`ON ${client.guilds.size} Servers `);
    console.log(`---------------`);
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setGame(`???? ?????? ?? ???????`,"http://twitch.tv/y04zgamer")
   client.user.setStatus("dnd")
});




client.on('message', message => {
    let args = message.content.split(' ').slice(1).join(' ');
    if (message.content.startsWith('*bc')){ // ???????? ??????
    if(!message.author.id === '') return;
    message.channel.sendMessage('??? ????? ??????? ?')
    client.users.forEach(m =>{
    m.sendMessage(args)
    })
    }
    });

    
    
client.login("");    // ?? ?????? ??? ????? ?? ????? ????? ?????
