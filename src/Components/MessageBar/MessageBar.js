import React from "react";
import "./style.css";
import { IoSend } from "react-icons/io5";
const MessageBar = () => {
  return (
    <div className="outer-div">
      <div className="input-bar">
        <input type="text" placeholder="Type something..."></input>
      </div>
      <button className="send-button">
        <IoSend className="send-button-icon" />
      </button>
    </div>
  );
};

export default MessageBar;
