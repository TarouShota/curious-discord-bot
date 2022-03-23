const Discord = require("discord.js");
const { cli } = require("webpack");
require("dotenv").config()


const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS"
    ]
})
let bot = {
    client,
    prefix: ".d",
    owners: ["275226492605169664"]


}
client.commands = new Discord.Collection();
client.events = new Discord.Collection();

client.loadEvents = (bot, reload) => require("../handlers/events.js")(bot, reload)
client.loadCommands = (bot, reload) => require("../handlers/commands")(bot, reload)



client.loadEvents(bot, false)
client.loadCommands(bot, false)




module.exports = bot







client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
    console.log(welcomeChannelId);
    console.log('logged in babe')

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

