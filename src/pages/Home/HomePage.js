import React, { useState } from "react";
import PeopleTabUI from "../../Components/Peopletab/PeopleTabUI";
import ChatSearchUI from "../../Components/ChatSearch/ChatSearchUI";
import Chat from "../../Components/Chat/Chat";
import "./style.css";
import MessageBar from "../../Components/MessageBar/MessageBar";
import ChatHeader from "../../Components/ChatHeader/ChatHeader";
import { useContext } from "react";
import { userContext } from "../../store/usercontext";
import { AiOutlineUserAdd } from "react-icons/ai";
import AddChatModal from "../../Components/AddChatModal/AddChatModal";
const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const {
    userData,
    setUserData,
    userId,
    currentChatTabUser,
    setCurrentChatTabUser,
  } = useContext(userContext);
  // console.log({ userId });

  return (
    <div className="main">
      {showModal && <AddChatModal setShowModal={setShowModal} />}
      <div className="sidepane">
        <ChatSearchUI />
        {userData.map((item) => {
          // console.log(item.name);
          if (item.id != userId) {
            // console.log(userId + " =>" + item.id);

            return (
              <PeopleTabUI
                name={item.name}
                id={item.id}
                key={item.id}
                img={`http://source.unsplash.com/random/${item.id}`}
              />
            );
          }
        })}

        <div className="outer-floating-button">
          <button
            className="floating-button "
            onClick={() => setShowModal(true)}
          >
            <AiOutlineUserAdd size={28} />
          </button>
        </div>
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
