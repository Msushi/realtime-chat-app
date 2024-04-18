import React, { useState } from "react";
import "./App.css";
import { connect, sendMsg } from "./api/index.js";

import Header from './components/Header/header.jsx';
import ChatHistory from './components/ChatHistory/ChatHistory.jsx'
import ChatInput from './components/ChatInput/ChatInput.jsx'
import Login from './components/Login/Login.jsx'

const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [chatHistory, setChatHistory] = useState([]);

  const send = (event) => {
    if(event.keyCode === 13) {
      sendMsg(event.target.value);
      event.target.value = "";
    }
  }

  const connectToServer = (username) => {
    setIsLoggedIn(true);
    console.log("username:", username)
    connect(username, (msg) => {
      console.log("New Message")
      setChatHistory(prevChatHistory => [...prevChatHistory, msg])
      console.log(chatHistory)
    });
  }


    return (
      <div className="App">
        <Header />
        { !isLoggedIn && <div className={isLoggedIn ? 'container-1 hidden' : 'container-1'}>
          <Login connect={connectToServer}/>
        </div> }
        {isLoggedIn && <div className='container-2'>
          <ChatHistory chatHistory={chatHistory} />
          <ChatInput send={send} />
        </div> }
        
        
      </div>
    );
}

export default App;