const { Schema, model } = require("mongoose");

const convoSchema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  messages: [messageSchema],
});

const Convo = model("Convo", convoSchema);

module.exports = Convo;
