import React, { useContext } from "react";
import "./AddChatModal.css";
import { AiOutlineClose, AiOutlineUserAdd } from "react-icons/ai";
import PeopleTabUI from "../Peopletab/PeopleTabUI";
import { userContext } from "../../store/usercontext";
import Loader from "react-spinners/BarLoader";
import { useState } from "react";
import { createChat } from "../../firebasefunctions/createChat";

const AddChatModal = ({ setShowModal }) => {
  const {
    userData,

    userId,
  } = useContext(userContext);

  const [searchText, setSearchText] = useState("");
  const [chatToCreate, setChatToCreate] = useState();
  console.log(chatToCreate, "here");
  return (
    <div className="wholeWindow">
      <div className="inner-modal">
        <div
          style={{
            display: "flex",
            width: "100%",
            zIndex: "4",
            position: "sticky",
            top: "3px",
            justifyContent: "space-between",

            alignItems: "flex-start",
          }}
        >
          <input
            className="input-search"
            placeholder="Search Users..."
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <AiOutlineClose
            color="white"
            enableBackground={30}
            size={30}
            style={{
              backgroundColor: "black",
              borderRadius: "50%",
              padding: "5px",
            }}
            onClick={() => setShowModal(false)}
          />
        </div>
        {userData ? (
          userData.map((item) => {
            // console.log(item.name);
            if (
              item.id !== userId &&
              item.name
                .toLowerCase()
                .indexOf(searchText.toLocaleLowerCase()) !== -1
            ) {
              // console.log(userId + " =>" + item.id);

              return (
                <PeopleTabUI
                  name={item.name}
                  chatToCreate={chatToCreate}
                  setChatToCreate={setChatToCreate}
                  id={item.id}
                  key={item.id}
                  onClick={() =>
                    setChatToCreate(...chatToCreate, {
                      name: item.name,
                      id: item.id,
                    })
                  }
                  forModal
                  img={`http://source.unsplash.com/random/${item.id}`}
                />
              );
            }
            return <></>;
          })
        ) : (
          <Loader />
        )}

        <div className="make-chat">
          <button
            className="make-chat-button"
            onClick={() => {
              createChat(userId, chatToCreate.id);
            }}
          >
            <AiOutlineUserAdd style={{ marginRight: "1rem" }} />
            <> Create Chat with {chatToCreate ? chatToCreate.name : "User"}</>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddChatModal;
