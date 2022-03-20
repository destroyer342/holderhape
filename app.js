// ID : 954134777060016178
// Invite_link: https://discord.com/oauth2/authorize?client_id=954134777060016178&scope=bot&permissions=1
require("dotenv").config();
const axios = require('axios');
const discord = require('discord.js')
let hapedata = [];
const client = new discord.Client({
    intents:["GUILDS","GUILD_MESSAGES", "DIRECT_MESSAGES"], partials:["CHANNEL", "GUILD_MEMBER", "MESSAGE", "REACTION", "USER"]
});



client.on("ready", (clientparams) => {
    console.log("this bot is now online " +client.user.tag)
    //client.user.setPresence({status: "dnd", activities: [{type: 'WATCHING', name: `⛽:  gweei`}] });
    //client.user.setActivity(`dwjkahdjhwajkdwajdaw`)
    getStats();
})

const getStats = async () => {
    try {
        let req = `https://api.opensea.io/api/v1/collection/hapeprime/stats?format=json`;
        const res = await axios.get(req);
        hapedata = res.data;
        client.user.setActivity(`${hapedata.stats.num_owners}  `);
    } catch (err) {
        console.log(err);
    }
}

setInterval(getStats, 10 * 2000);
client.on("messageCreate", (message) => {
if (message.author.bot == false){
 
  
    // const embed = new discord.MessageEmbed()
    // .setColor("RANDOM")
    // .setDescription(`according to my calculations, you are funny😂`)
    // message.channel.send({ embeds: [embed] });
    //  message.reply(`${message.channel.id}`)
    // console.log(`${message.content}`)
   // client.user.setActivity(`hay nako hay nako`);
    //client.user.setStatus('invisible')
}
})
client.login(process.env.discordToken)
//client.login(process.env.discordToken1)
