import React from "react";
import PeopleTabUI from "../../Components/Peopletab/PeopleTabUI";
import ChatSearchUI from "../../Components/ChatSearch/ChatSearchUI";
import Chat from "../../Components/Chat/Chat";
import "./style.css";
import MessageBar from "../../Components/MessageBar/MessageBar";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
const HomePage = () => {
  return (
    <div className="main">
      <div className="sidepane">
        <ChatSearchUI />
        <PeopleTabUI name="sth" id={1} />
        <PeopleTabUI name="Tanya" id={2} />
        <PeopleTabUI name="sam" id={3} />
        <PeopleTabUI name="dam" id={4} />
        <PeopleTabUI name="ham" id={5} />
        <PeopleTabUI name="kam" id={6} />
        <PeopleTabUI name="Vaibhav" id={7} />
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
