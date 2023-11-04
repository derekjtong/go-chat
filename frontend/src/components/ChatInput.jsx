import { useState } from "react";

function ChatInput({ sendMsg }) {
  const [input, setInput] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    sendMsg(input);
    setInput("");
  }

  return (
    <form onSubmit={handleSubmit} className="mx-auto block w-11/12">
      <input
        className="m-0 w-full rounded-md border border-none border-gray-200 p-2.5 text-base shadow-sm"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        autoFocus
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default ChatInput;
