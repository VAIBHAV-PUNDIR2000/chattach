import React, { useContext } from "react";
import "./style.css";
import { userContext } from "../../store/usercontext";
import "bootstrap/dist/css/bootstrap.min.css";

const PeopleTabUI = (prop) => {
  const { name, img, id } = prop;
  console.log(prop);
  const { setCurrentChatTabUser, currentChatTabUser } = useContext(userContext);
  // console.log({ setCurrentChatTabUser, currentChatTabUser });
  return (
    <div
      style={
        currentChatTabUser?.id === id
          ? {
              backgroundColor: "#000",
            }
          : {}
      }
      className="single-tab-ui"
      onClick={() => {
        setCurrentChatTabUser({
          ...currentChatTabUser,
          id: id,
          name: name,
          img: img,
        });
      }}
    >
      <img className="profile-pic" src={img}></img>
      <div className="profile-name">{name} </div>
    </div>
  );
};

export default PeopleTabUI;
