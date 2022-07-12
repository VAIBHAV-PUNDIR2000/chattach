import React, { useContext } from "react";
import ChatMessage from "../ChatMessage/ChatMessage";
const Chat = () => {
  return (
    <div>
      <ChatMessage
        text="lorem34 dffjkhhdsf dskfhdsof dfkljhsdflk fkdsjhfhkjhkl d fkjljdshfhkljjds  flkjfhjdsk flkhdhf hdsflkjhjh dkhjlf dskfjjfhdksjjfh dfkljhdskf kjhjdfkh  "
        mode="sender"
        date={new Date().toLocaleTimeString()}
      />
    </div>
  );
};

export default Chat;
