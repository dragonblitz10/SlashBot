exports.create = async(client, name, description, options) => {
    if (!name || !description) return console.error('No name or description given for slash command')
    let req = await client.api.applications(client.user.id).commands.post({
        data: {
          name: name,
          description: description,
          options: options
        },
      });
      return req
    }

exports.update = async(client, command, name, description) => {
    if (!name || !description) return console.error('No name or description given for slash command')
    let req = await client.api.applications(client.user.id).commands(command).patch({
        data: {
          name: name,
          description: description,
        },
      });     
      return req
}

exports.send = async(client, interaction, message) => {
    if (!message) return console.error('No message provided')
    let req = await client.api.interactions(interaction.id, interaction.token).callback.post({
    data: {
      type: 3,
      data: {
        content: message,
      },
    },
  });
  return req
}

exports.delete = async(client, command) => {
  let commandID = await client.api.applications(client.user.id).commands.get()
  commandID = commandID.filter(x => x.name == command)
  commandID = commandID[0].id
  let req = await client.api.applications(client.user.id).commands(commandID).delete()
  return req
}