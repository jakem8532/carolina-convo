const { Schema, model } = require("mongoose");
const messageSchema = require("./Message");
const dateFormatter = require("../utils/dateFormatter");

const chatSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormatter(timestamp),
    },
    invitedBy: {
      type: String,
      required: true,
    },
    messages: [messageSchema],
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Chat = model("Chat", chatSchema);

module.exports = Chat;
