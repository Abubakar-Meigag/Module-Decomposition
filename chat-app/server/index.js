const http                = require("http");
const express             = require("express");
const { WebSocketServer } = require("ws");
const cors                = require("cors");
const bodyParser          = require("body-parser");

const app     = express();
const server  = http.createServer(app);
const wss     = new WebSocketServer({ server });

const port    = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

wss.on("connection", (ws) => {
  console.log("new client connected");

  ws.on("close", () => {
    console.log("client disconnected");
  });
});

app.get("/", (req, res) => {
  res.send(`Welcome to Beeko chat app server on port ${port}`);
});

const getMessage = require("./endPoints/getMessage");
const postMessage = require("./endPoints/postMessage");

app.get("/messages", getMessage);
app.post("/messages", (req, res) => postMessage(req, res, wss));

server.listen(port, () => {
  console.log(`Server is running on Port: ${port}`);
});