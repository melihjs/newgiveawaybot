module.exports.help = {
  name: "ginvite"
};

module.exports.run = async (client, message, args) => {
  message.channel.send(`:tada: Hello! I'm **${client.user.username}**! I help to make giveaways quick and easy!\nYou can add me to your server with this link:\n\n:link: https://discord.com/oauth2/authorize?client_id=816735038107549717&scope=bot&permissions=8\n\nCheck out my commands by typing \`?ghelp\``)
};