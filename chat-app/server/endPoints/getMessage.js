const messages = require("../data/messages");

const getMessage = (req, res) => {
  res.json(messages);
};

module.exports = getMessage;