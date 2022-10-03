const { Schema, model } = require("mongoose");
const dateFormat = require('../utils/dateFormat')

const chatSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  convoBody: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 400
  },
  createdAt: {
    type: Date,
    default: Date.now(),
    get: timestamp => dateFormat(timestamp)
  },

  messages: [messageSchema],
});

const Convo = model("Chat", chatSchema);

module.exports = Convo;
