import React, { useState } from "react";
import "./Login.css";

const Login = ({ connect }) => {
  const [username, setUsername] = useState("");

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  }

  const handleConnect = () => {
    connect(username);
  }

    return (
      <div className="Login">
        <p>What username do you want to use in the chatroom</p>
        <input type="text" value={username} onChange={handleInputChange}/>
        <button onClick={handleConnect}>Connect</button>
      </div>
    );
}

export default Login;