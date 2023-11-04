import { useEffect, useState } from "react";
import { connect, sendMsg } from "./api";
import Header from "./components/Header";
import ChatHistory from "./components/ChatHistory";
import ChatInput from "./components/ChatInput";

export default function App() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    connect((msg) => {
      console.log("New message");
      setMessages((prevMessages) => [...prevMessages, msg]);
    });
  }, []);

  return (
    <>
      <div>
        <Header />
        <ChatHistory messages={messages} />
        <ChatInput sendMsg={sendMsg} />
      </div>
    </>
  );
}
