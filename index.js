const Discord = require('discord.js');
const bot = new Discord.Client();
let prefix = "+";
 
bot.on('guildMemberAdd', member =>{
    let embed = new Discord.RichEmbed()
        .setDescription(':tada: **' + member.user.username + '** à rejoint la ' + member.guild.name)
        .setFooter('Nous sommes désormais' + member.guild.memberCount)
        .setThumbnail("https://i.gifer.com/Pu4M.gif")
    member.guild.channels.get('714401802577248427').send(embed)
    

})


bot.on("ready",function(){
    console.log("conférie activer! ");
    bot.user.setActivity("stream conférie:crystal_ball:", {type: "PLAYING"})
    bot.user.setGame(`la confrérie🔮`, 'https://www.twitch.tv/CrowBots')
})

    bot.login("NzE0NDA2NjQ5MDc0Mjg2NjQy.Xt8sSg.HXSlL5U_g0JJTl_SZ9LMKv5e_ok");

    bot.on(`message`, message => {
        if (message.content === ""){
        console.log("hey");
    }  
})






