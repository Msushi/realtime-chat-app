import React, { useState } from "react";
import "./ChatInput.css";

const ChatInput = ({ send }) => {

  const sendMsg = (event) => {
    send(event);
  }
    return (
      <div className="ChatInput">
        <input onKeyDown={sendMsg} />
      </div>
    );
}

export default ChatInput;