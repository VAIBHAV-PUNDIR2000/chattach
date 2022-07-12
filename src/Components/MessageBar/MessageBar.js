import React, { useState } from "react";
import { sendMessage } from "./MessageBarLogic";
import "./style.css";
import { IoSend } from "react-icons/io5";
const MessageBar = () => {
  const [message, setMessage] = useState("");
  console.log({ message });
  return (
    <div className="outer-div">
      <div className="input-bar">
        <input
          onKeyDown={(e) => {
            if (e.key == "Enter") {
              sendMessage(message, setMessage);
            }
          }}
          type="text"
          value={message}
          placeholder="Type something..."
          onChange={(mess) => {
            setMessage(mess.target.value);
          }}
        ></input>
      </div>
      <button className="send-button">
        <IoSend
          className="send-button-icon"
          onClick={() => {
            sendMessage(message, setMessage);
          }}
        ></IoSend>
      </button>
    </div>
  );
};

export default MessageBar;
