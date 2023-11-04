import React from "react";

export default function ChatHistory({ messages }) {
  return (
    <div className="m-0 bg-neutral-100 p-20">
      <h2 className="m-0 p-0">Chat History</h2>
      {messages.map((msg, index) => (
        <p key={index}>{msg.data}</p>
      ))}
    </div>
  );
}
