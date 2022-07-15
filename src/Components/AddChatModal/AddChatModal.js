import React, { useContext } from "react";
import "./AddChatModal.css";
import { AiOutlineClose } from "react-icons/ai";
import PeopleTabUI from "../Peopletab/PeopleTabUI";
import { userContext } from "../../store/usercontext";
import Loader from "react-spinners/BarLoader";

const AddChatModal = ({ setShowModal }) => {
  const {
    userData,
    setUserData,
    userId,
    currentChatTabUser,
    setCurrentChatTabUser,
  } = useContext(userContext);
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
            alignItems: "center",
            marginBottom: "10px",
          }}
        >
          <input className="input-search" placeholder="Search Users..." />
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
            if (item.id != userId) {
              // console.log(userId + " =>" + item.id);

              return (
                <PeopleTabUI
                  name={item.name}
                  id={item.id}
                  key={item.id}
                  forModal
                  img={`http://source.unsplash.com/random/${item.id}`}
                />
              );
            }
          })
        ) : (
          <Loader />
        )}

        <div className="make-chat">
          <button className="make-chat-button">Create </button>
        </div>
      </div>
    </div>
  );
};

export default AddChatModal;
