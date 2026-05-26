import { useState } from "react";
import "./MessageForm.css";

interface Props {
  name: string;
  onNameChange: (name: string) => void;
  onSend: (text: string) => void;
  messageCount: number;
}

function MessageForm({ name, onNameChange, onSend, messageCount }: Props) {
  const [text, setText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;
    onSend(text.trim());
    setText("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label" htmlFor="name">
          Your name
        </label>
        <input
          id="name"
          className="input"
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => onNameChange(e.target.value)}
        />
      </div>
      <div className="field">
        <label className="label" htmlFor="message">
          Message
        </label>
        <textarea
          id="message"
          className="textarea"
          placeholder="Type a message..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={3}
        />
      </div>
      <div className="actions">

        <span className="count">messages: {messageCount}</span>

        <button
          className="button"
          type="submit"
          disabled={!name.trim() || !text.trim()}
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default MessageForm;