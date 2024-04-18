import React, { useState } from "react";
import "./ChatHistory.css";

import Message from "../Message/Message.jsx"

const ChatHistory = ({ chatHistory }) => {

  const messages = chatHistory.map(msg => <Message message={msg.data} />);

    return (
      <div className="ChatHistory">
        <h2>Chat History</h2>
        {messages}
      </div>
    );
}

export default ChatHistory;