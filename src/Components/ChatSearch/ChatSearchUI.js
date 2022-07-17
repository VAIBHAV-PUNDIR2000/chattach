import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const ChatSearchUI = ({ setSearchText }) => {
  return (
    <div className="chat-search-form">
      <input
        type="text"
        className="chat-input"
        placeholder="Enter the name of Chat"
        onChange={(e) => {
          setSearchText(e.target.value);
        }}
      ></input>
    </div>
  );
};

export default ChatSearchUI;
