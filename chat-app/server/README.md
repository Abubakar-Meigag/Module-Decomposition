# Backend (`server/`)

Built with **Node.js + Express + WebSocket**

## Technologies

- **Node.js** - runtime
- **Express** - HTTP server and routing
- **ws** - WebSocket server for real-time broadcasting
- **uuid** - generating unique message IDs
- **cors** - allowing cross-origin requests from the frontend

## Structure

```
server/
  index.js              - server setup, middleware, WebSocket, routes
  data/
    messages.js         - shared in-memory messages array
  endPoints/
    getMessage.js       - handles GET /messages
    postMessage.js      - handles POST /messages and broadcasts via WebSocket
```

## Implementation

`index.js`

- Sets up Express with `cors` and `body-parser` middleware
- Creates an HTTP server and attaches a WebSocket server to the same port
- Logs when clients connect and disconnect via WebSocket
- Mounts `GET /messages` and `POST /messages` routes
- Passes the `wss` instance into `postMessage` so it can broadcast

`data/messages.js`

- Exports a shared in-memory array that both endpoints read from and write to

`endPoints/getMessage.js`

- Returns the full messages array as JSON

`endPoints/postMessage.js`

- Validates that `name` and `text` are present in the request body
- Returns `400` if either is missing
- Creates a new message with `uuid` for `id` and server-generated `timestamp`
- Pushes the message to the shared array
- Broadcasts the new message to all connected WebSocket clients with `readyState === 1`
- Returns `201` with the created message

## What I Learned

Building this project showed how a single server can handle both REST and WebSocket on the same port, and how passing the WebSocket server instance into route handlers is the key to broadcasting messages to all connected clients after a POST request.
