const { Schema, model } = require("mongoose");

const convoSchema = new Schema({});

const Convo = model("Convo", convoSchema);

module.exports = Convo;
