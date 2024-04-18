import React, { useState } from "react";
import "./Message.css";

const Message = (msg) => {

  console.log(msg);
  const [message, setMessage] = useState(JSON.parse(msg.message).body);
  const [sender, setSender] = useState(JSON.parse(msg.message).Sender);

  return (
    <div className="container">
      <p>{sender}</p>
      <div className="Message">{message}</div>
    </div>
  );
}

export default Message;