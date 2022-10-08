const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/carolina-convo"
);

module.exports = mongoose.connection;
