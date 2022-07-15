import React, { useState, useContext } from "react";
import "./style.css";
import { userContext } from "../../store/usercontext";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "react-spinners/PuffLoader";

const PeopleTabUI = (prop) => {
  const { name, img, id, forModal } = prop;
  const [loading, setLoading] = useState(true);
  // console.log({ loading });
  const { setCurrentChatTabUser, currentChatTabUser } = useContext(userContext);
  // console.log({ setCurrentChatTabUser, currentChatTabUser });
  return (
    <div
      style={
        currentChatTabUser?.id === id && !forModal
          ? {
              backgroundColor: "#000",
            }
          : {}
      }
      className="single-tab-ui"
      onClick={() => {
        if (!forModal) {
          setCurrentChatTabUser({
            ...currentChatTabUser,
            id: id,
            name: name,
            img: img,
          });
        } else {
        }
      }}
    >
      {
        <React.Fragment
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {loading ? <Loader /> : ""}

          <div style={{ display: loading ? "none" : "block" }}>
            <img
              src={img}
              className="profile-pic"
              onLoad={() => {
                setLoading(false);
              }}
            ></img>
          </div>
        </React.Fragment>
      }
      <div className="profile-name">{name} </div>
    </div>
  );
};

export default PeopleTabUI;
