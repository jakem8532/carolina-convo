const { Schema, model } = require("mongoose");
const dateFormatter = require("../utils/dateFormatter");

const messageSchema = new Schema(
  {
    createdAt: {
      type: Date,
      default: Date.now,
      get: (timestamp) => dateFormatter(timestamp),
    },
    messageBody: {
      type: String,
      trim: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  {
    toJSON: {
      getters: true,
    },
  }
);

const Message = model("Message", messageSchema);

module.exports = Message;
