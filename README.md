# Coursework

Exercises to practice and solidify your understanding of the Decomposition module of the Software Development Course.

---

# Beeko Chat App

A real-time chat application where users can send and receive messages instantly without refreshing the page.

## Project Structure

```
chat-app/
  client/   - Vite + React + TypeScript frontend
  server/   - Node.js + Express backend
```

## Features

- Send a message to the chat
- See all messages when opening the chat
- New messages appear instantly for all connected users
- Message count display
- Username persisted across sessions

## How It Works

The frontend loads existing messages from the server on page load via a REST API. When a user sends a message, it is posted to the server which saves it and broadcasts it to all connected clients over a WebSocket channel. Every connected user receives the new message instantly without needing to refresh.

## Getting Started

**Backend**
```bash
cd server
npm install
node index.js
```

**Frontend**
```bash
cd client
npm install
npm run dev
```

## Deployment

- Backend is deployed as a Docker container
- Frontend is deployed as a static site via Nixpacks
