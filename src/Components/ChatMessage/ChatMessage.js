import React from "react";
import "./style.css";
const ChatMessage = (props) => {
  var { name, text, mode, date } = props;
  return (
    <div
      className="ChatMessage"
      style={
        mode === "sender"
          ? {
              float: "right",
              backgroundColor: "rgb(242, 242, 242)",
            }
          : { float: "left", backgroundColor: "rgb(208, 208, 225)" }
      }
    >
      <div className="ChatMessage-text">
        <div className="ChatMessage-Person">{name}</div>
        <div>{text}</div>
        <div className="ChatMessage-date">{date}</div>
      </div>
    </div>
  );
};

export default ChatMessage;
