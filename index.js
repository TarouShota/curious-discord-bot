const Discord = require("discord.js");
require("dotenv").config()


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})


client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    console.log(welcomeChannelId);
})

client.on("messageCreate", (message) => {
    if (message.content == 'hi') {
        message.reply("sup bitch");
    }
})

const welcomeChannelId = "861620153207881741"

client.on("guildMemberAdd", (member) => {
    member.guild.channels.cache.get(welcomeChannelId).send(`<@${member.id}> Hello there`);

})

client.login(process.env.TOKEN);

