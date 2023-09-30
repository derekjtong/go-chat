import { useEffect, useState } from "react";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New message");
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  function send() {
    console.log("hello");
    sendMsg("hello");
  }

  return (
    <>
      <div>
        <Header />
        <ChatHistory messages={messages} />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => send()}
        >
          Send hello
        </button>
      </div>
    </>
  );
}
