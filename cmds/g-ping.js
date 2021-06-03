module.exports.help = {
  name: "gping"
};

module.exports.run = async (client, message, args) => {
  message.channel.send(`:star: Pinging...`).then((s) => { 
    setTimeout(function() {
      s.edit(`:ping_pong: Pong! **${client.ws.ping}**ms`)
    }, 2100)
  });
};