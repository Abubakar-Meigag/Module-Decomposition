import { useState, useEffect } from "react";
import MessageList from "./components/MessageList";
import MessageForm from "./components/MessageForm";
import type { Message } from "./types";
import "./App.css";

const MESSAGES_KEY = "chatMessagesKey";
const NAME_KEY = "chatNameKey";

function App() {

  const [messages, setMessages] = useState<Message[]>(() => {
    const stored = localStorage.getItem(MESSAGES_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  const [name, setName] = useState<string>(() => {
    return localStorage.getItem(NAME_KEY) ?? "";
  });

  useEffect(() => {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(messages));
  }, [messages]);

  useEffect(() => {
    localStorage.setItem(NAME_KEY, name);
  }, [name]);

  const handleSend = (text: string) => {
    const newMessage: Message = {
      id: crypto.randomUUID(),
      name,
      text,
      timestamp: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };
    setMessages((prev) => [...prev, newMessage]);
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