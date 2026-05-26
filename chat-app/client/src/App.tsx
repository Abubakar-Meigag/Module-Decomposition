import { useState, useEffect }  from "react";
import MessageList              from "./components/MessageList";
import MessageForm              from "./components/MessageForm";
import type { Message }         from "./types";
import "./App.css";

const SERVER_URL  = "https://server-beeko-chat.hosting.codeyourfuture.io";
const WS_URL      = "wss://server-beeko-chat.hosting.codeyourfuture.io";

function App() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [name, setName] = useState<string>(() => {
    return localStorage.getItem("chatNameKey") ?? "";
  });

  useEffect(() => {
    fetch(`${SERVER_URL}/messages`)
      .then((res) => res.json())
      .then((data) => setMessages(data))
      .catch((err) => console.error("failed to fetch messages", err));
  }, []);

  useEffect(() => {
    const ws = new WebSocket(WS_URL);

    ws.onmessage = (event) => {
      const newMessage: Message = JSON.parse(event.data);
      setMessages((prev) => [...prev, newMessage]);
    };

    ws.onerror = (err) => console.error("websocket error", err);

    return () => ws.close();
  }, []);

  useEffect(() => {
    localStorage.setItem("chatNameKey", name);
  }, [name]);

  const handleSend = async (text: string) => {
    try {
      await fetch(`${SERVER_URL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, text }),
      });
    } catch (err) {
      console.error("failed to send message", err);
    }
  };

  return (
    <div className="app">
      <h1 className="app_title">Beeko Chat App</h1>
      <div className="app_container">
        <MessageList messages={messages} />
        <MessageForm name={name} onNameChange={setName} onSend={handleSend} />
      </div>
    </div>
  );
}

export default App;