import React from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
const Chat = () => {
  return (
    <div>
      <ChatMessage
        text="lorem34 dffjkhhdsf dskfhdsof dfkljhsdflk fkdsjhfhkjhkl d fkjljdshfhkljjds  flkjfhjdsk flkhdhf hdsflkjhjh dkhjlf dskfjjfhdksjjfh dfkljhdskf kjhjdfkh  "
        mode="sender"
        date={new Date().toLocaleTimeString()}
      />
      <ChatMessage
        name="rahim"
        text="Hello"
        mode="reciever"
        date={new Date().toLocaleTimeString()}
      />
      <ChatMessage
        name="jantu"
        text="Hello"
        mode="sender"
        date={new Date().toLocaleTimeString()}
      />
      <ChatMessage
        name="ram"
        text="Hello"
        mode="sender"
        date={new Date().toLocaleTimeString()}
      />
      <ChatMessage
        name="senti"
        text="Hello"
        mode="reciever"
        date={new Date().toLocaleTimeString()}
      />
      <ChatMessage
        name="suppu"
        text="Hello"
        mode="reciever"
        date={new Date().toLocaleTimeString()}
      />
    </div>
  );
};

export default Chat;
