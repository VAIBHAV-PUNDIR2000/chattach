import React from "react";
import "./style.css";
import { BiSearch, BiMenu } from "react-icons/bi";
const ChatHeader = () => {
  return (
    <div className="outer">
      <img
        className="profile-pic-header"
        src="https://source.unsplash.com/random"
      ></img>
      <div className="profile-name-header">bhade</div>
      <div className="right">
        <BiSearch
          color="white"
          size={34}
          style={{ marginRight: "2vw", cursor: "pointer" }}
          onClick={""}
        />
        <BiMenu
          color="white"
          size={34}
          onClick={""}
          style={{ marginRight: "2vw", cursor: "pointer" }}
        />
      </div>
    </div>
  );
};

export default ChatHeader;
