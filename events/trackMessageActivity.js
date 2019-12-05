const MessageActivity = require('../models/MessageActivity');

const trackMessageActivity = message => {
  MessageActivity.create({
    userId: message.author.id,
    guild: message.channel.guild.id,
    channelName: message.channel.name,
    channelId: message.channel.id,
    messageId: message.id,
  }).catch(err => {
    io.notifyError(new Error('[DB] Log Message Activity'), {
      custom: {
        error: err,
        messageId: message.id,
      }
    });
  });
}

module.exports = trackMessageActivity;