const moment = require("moment");

module.exports = (timestamps) => {
  return moment(timestamps).format("MMM Do YY h:mm:ss a");
};
