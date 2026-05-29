# Write and Deploy Chat Application Frontend and Backend

### Link to the coursework

https://sdc.codeyourfuture.io/decomposition/sprints/2/prep/

You must complete and deploy a chat application. You have two weeks to complete this.

It must support at least the following requirements:
* As a user, I can send add a message to the chat.
* As a user, when I open the chat I see the messages that have been sent by any user.
* As a user, when someone sends a message, it gets added to what I see.

It must also support at least one additional feature.

### Why are we doing this?

Learning about deploying multiple pieces of software that interact.

Designing and implementing working software that users can use.

Exploring and understanding different ways of sending information between a client and server.

### Maximum time in hours

16

### How to submit

* Fork the Module-Decomposition repository
* Develop and deploy your chat app
* Create a pull request back into the original Module-Decomposition repo, including:
    * A link to the deployed frontend on the CYF hosting environment
    * A link to the deployed backend on the CYF hosting environment


---
## Implementation


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