module.exports.help = {
  name: "ghelp"
};

module.exports.run = async (client, message, args) => {
  message.react('🎉');
  message.author.send(':tada: __**'+client.user.username+'** commands:__\n\n**?gabout** - shows info about the bot\n**?ginvite** - shows how to invite the bot\n**?gping** - checks the bot\'s latency\n\n__Giveaway:__\n\n**?gstart <time> [winners] [prize]** - starts a giveaway (quick setup)\n**?gend [messageId]** - ends (picks a winner for) the specified or latest giveaway in the current channel\n**?greroll [messageId]** - re-rolls the specified or latest giveaway in the current channel\n**?glist** - lists active giveaways on the server\n\nDo not include `<>`, `<>` or `[]` means optional.\nFor additional help, contact **melih#1337**')
};