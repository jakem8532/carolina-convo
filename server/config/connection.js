const mongoose = require("mongoose");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/carolina-convo",
  {
    useNewUrlParser: true,
    useUnifiedTopology,
  }
);

module.exports = mongoose.connection;
