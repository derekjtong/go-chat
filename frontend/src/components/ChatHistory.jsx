import React from "react";
import Message from "./Message";

export default function ChatHistory({ messages }) {
  const message = messages.map((msg) => <Message message={msg.data} />);
  return (
    <div className="m-0 bg-neutral-100 p-20">
      <h2 className="m-0 p-0">Chat History</h2>
      {message}
    </div>
  );
}
