exports.get = async(client, interaction) => {
    let guild = await client.guilds.fetch(interaction.guild_id)
    let member = await guild.members.fetch(interaction.member.user.id)
    return member.permissions.toArray().join('\n')
}

exports.getUser = async(client, interaction, user) => {
    let guild = await client.guilds.fetch(interaction.guild_id)
    let member = await guild.members.fetch(user)
    let author = `${interaction.member.user.username}#${interaction.member.user.discriminator}`
    member = `Permissions for User ${member.user.tag}\n\`\`\`${member.permissions.toArray().join('\n')}\`\`\`\nRequested by ${author} via slash commands`
    return member
}

exports.getRole = async(client, interaction, role) => {
    let guild = await client.guilds.fetch(interaction.guild_id)
    role = await guild.roles.fetch(role)
    let author = `${interaction.member.user.username}#${interaction.member.user.discriminator}`
    role = `Permissions for role ${role.name}\n\`\`\`${role.permissions.toArray().join('\n')}\`\`\`nRequested by ${author} via slash commands`
    return role
}