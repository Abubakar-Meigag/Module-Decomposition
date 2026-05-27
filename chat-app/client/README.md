# Frontend (`client/`)

Built with **Vite + React + TypeScript**

## Technologies

- **Vite** - build tool and dev server
- **React 19** - UI library
- **TypeScript** - type safety across all components

## Structure

```
src/
  types.ts                      - shared Message interface
  App.tsx / App.css             - root component, state, API calls
  components/
    MessageList.tsx / .css      - scrollable list of messages
    MessageForm.tsx / .css      - name input, message textarea, send button
```

## Implementation

`types.ts`

- Defines the `Message` interface with `id`, `name`, `text`, and `timestamp`

`App.tsx`

- Fetches all messages from `GET /messages` on page load
- Opens a WebSocket connection to listen for new messages in real time
- Persists the username in `localStorage` so it survives page refresh
- Passes `handleSend` down to `MessageForm` which calls `POST /messages`

`MessageList.tsx`

- Receives messages as props and renders each one with name, timestamp, and text
- Auto-scrolls to the latest message using a `ref` on the bottom of the list

`MessageForm.tsx`

- Controlled inputs for name and message
- Name is remembered between sessions, message clears after sending
- Send button is disabled if either field is empty
- Displays total message count as an additional feature

## What I Learned

Building this project showed how the frontend and backend need a clear contract to work together, the REST endpoints handle loading and sending data, while WebSocket handles the real-time layer, and understanding when to use each was the key challenge.
