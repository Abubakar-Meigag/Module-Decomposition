import { useEffect, useRef } from "react";
import type { Message } from "../types";
import "./MessageList.css";

interface Props {
  messages: Message[];
}

function MessageList({ messages }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="messageList">
      {messages.length === 0 && (
        <p className="empty">No messages yet. Say something!</p>
      )}
      {messages.map((msg) => (
        <div key={msg.id} className="item">
          <div className="header">
            <span className="name">{msg.name}</span>
            <span className="timestamp">{msg.timestamp}</span>
          </div>
          <p className="text">{msg.text}</p>
        </div>
      ))}
      <div ref={bottomRef} />
    </div>
  );
}

export default MessageList;