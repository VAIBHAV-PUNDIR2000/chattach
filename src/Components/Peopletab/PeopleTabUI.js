import React from "react";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { getActiveElement } from "@testing-library/user-event/dist/utils";
const PeopleTabUI = (prop) => {
  const { name, img, id } = prop;
  console.log(prop);
  return (
    <div className="single-tab-ui">
      <img
        className="profile-pic"
        src={`http://source.unsplash.com/random/${id}`}
      ></img>
      <div className="profile-name">{name}</div>
    </div>
  );
};

export default PeopleTabUI;
