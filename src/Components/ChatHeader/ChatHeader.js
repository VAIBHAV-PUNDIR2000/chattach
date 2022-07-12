import React, { useContext } from "react";
import "./style.css";
import { userContext } from "../../store/usercontext";
import { BiSearch, BiMenu } from "react-icons/bi";
const ChatHeader = () => {
  const { currentChatTabUser } = useContext(userContext);
  console.log(currentChatTabUser?.img);
  return (
    <div className="outer">
      <img className="profile-pic-header" src={currentChatTabUser?.img}></img>
      <div className="profile-name-header">{currentChatTabUser?.name}</div>
      <div className="right">
        <BiSearch
          color="white"
          size={34}
          style={{ marginRight: "2vw", cursor: "pointer" }}
        />
        <BiMenu
          color="white"
          size={34}
          style={{ marginRight: "2vw", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
