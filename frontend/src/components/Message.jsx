import { useState } from "react";

function Message(props) {
  const [message, setMessage] = useState(JSON.parse(props.message));
  return <div className="clear-both mx-auto my-2 block rounded-md bg-white p-2.5 shadow-md">{message.body}</div>;
}

export default Message;
