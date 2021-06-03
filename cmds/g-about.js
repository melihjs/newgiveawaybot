const { MessageEmbed } = require("discord.js");

module.exports.help = {
  name: "gabout"
};

module.exports.run = async (client, message, args) => {
  let server = client.guilds.cache.array().length;
  let shard = "0";
  let gws = client.db.get('gws').length;
  let embed = new MessageEmbed()
  .setTitle("Hold giveaways quickly and easily!")
  .setDescription("Hello! I'm **"+client.user.username+"**, and I'm here to make it as easy as possible to hold giveaways on your Discord server! I was created by [**melih**#1337](https://discord.com/users/760421959556792320) (<@760421959556792320>) using the **discord-giveways** package ("+require("discord-giveaways").version+"). Check out my commands by typing `?ghelp`.")
  .addField(":bar_chart: Stats", `${server} server(s)\n${shard} shard(s)`, true)
  .addField(":tada: Giveaways", `${gws || 0} right now!`, true)
  .addField(":globe_with_meridians: Links", "[Invite](https://discord.com/oauth2/authorize?client_id="+client.user.id+"&scope=bot&permissions=8)\n[Support](https://discord.gg/e2gvuDRmHm)", true)
  .setColor("BLURPLE");
  message.channel.send(":tada: All about **"+client.user.username+"** :tada:", { embed: embed });
};