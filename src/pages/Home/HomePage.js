import React from "react";
import PeopleTabUI from "../../Components/Peopletab/PeopleTabUI";
import ChatSearchUI from "../../Components/ChatSearch/ChatSearchUI";
import Chat from "../../Components/Chat/Chat";
import "./style.css";
import MessageBar from "../../Components/MessageBar/MessageBar";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import { useContext } from "react";
import { userContext } from "../../store/usercontext";
const HomePage = () => {
  const { userData, setUserData, userId } = useContext(userContext);
  console.log({ userId });
  return (
    <div className="main">
      <div className="sidepane">
        <ChatSearchUI />
        {userData.map((item) => {
          console.log(item.name);
          if (item.id != userId) {
            console.log(userId + " =>" + item.id);

            return <PeopleTabUI name={item.name} id={item.id} />;
          }
        })}
      </div>
      <div className="right-pane">
        <ChatHeader />
        <div className="chat">
          <Chat />
        </div>
        <div>
          <MessageBar />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
