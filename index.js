const Discord = require('discord.js');
const client = new Discord.Client();
const slash = require('./lib/slash');
const permissions = require('./commands/permissions');
const commands = require('./commands.json')
const config = require('./config.json')

client.on('ready', async() => {
slash.create(client, commands.permissions.name, commands.permissions.description, commands.permissions.options)
return console.log(`Logged in as ${client.user.tag}!`);

});


client.ws.on("INTERACTION_CREATE", async interaction => {
const name = interaction.data.name
const data = interaction.data

if (name == 'permissions') {
let action = data.options[0].options[0].options[0]
let action2 = data.options[0].options[0]
let sender
if (action.name == 'user' && action2.name == 'get') sender = await permissions.getUser(client, interaction, action.value)
if (action.name == 'role' && action2.name == 'get') sender = await permissions.getRole(client, interaction, action.value)
if (sender) return slash.send(client, interaction, sender)
}
return interaction
});
  

client.login(config.token);