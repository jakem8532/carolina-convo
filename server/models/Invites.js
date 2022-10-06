const { Schema } = require("mongoose");
const moment = require('moment')

const inviteSchema = new Schema({
  chatTitle: {
    type: String,
    required: true,
  },
  senderUsername: {
    type: String,
    required: true,
  },
  chatId: {
    type: String,
    required: true,
  },
});



module.exports = inviteSchema;
