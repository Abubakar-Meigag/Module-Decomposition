const { v4: uuidv4 } = require("uuid");
const messages = require("../data/messages");

const postMessage = (req, res, wss) => {
  const { name, text } = req.body;

  if (!name || !text) {
    return res.status(400).json({ error: "name and text are required" });
  }

  const newMessage = {
    id: uuidv4(),
    name,
    text,
    timestamp: new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
  };

  messages.push(newMessage);

  wss.clients.forEach((client) => {
    if (client.readyState === 1) {
      client.send(JSON.stringify(newMessage));
    }
  });

  res.status(201).json(newMessage);
};

module.exports = postMessage;