import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
const PeopleTabUI = (prop) => {
  const { name, img, id } = prop;
  return (
    <div className="single-tab-ui" onClick={""}>
      <img
        className="profile-pic"
        src={`http://source.unsplash.com/random/${id}`}
      ></img>
      <div className="profile-name">{name}</div>
    </div>
  );
};

export default PeopleTabUI;
