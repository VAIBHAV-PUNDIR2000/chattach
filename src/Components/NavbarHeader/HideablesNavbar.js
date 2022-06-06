import React from "react";
import {
  Nav,
  FormControl,
  NavDropdown,
  Form,
  Button,
  Navbar,
} from "react-bootstrap";
import { signout } from "../../firebase/signout";
import { userContext } from "../../store/usercontext";
import { useContext } from "react";
const HideablesNavbar = () => {
  const { userData, userId } = useContext(userContext);
  console.log(userData);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignContent: "baseline",
      }}
    >
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        <Nav
          className="me-auto my-2 my-lg-0"
          style={{ maxHeight: "100px" }}
          navbarScroll
        >
          <Nav.Link>
            {userData.map((o) => {
              if (o.id == userId) return o.name;
            })}
          </Nav.Link>
          <NavDropdown title="Settings " id="navbarScrollingDropdown">
            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item
              onClick={() => {
                signout();
                console.log("hereIam");
              }}
            >
              Logout
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
      <img
        src="https://source.unsplash.com/random/45"
        style={{
          height: "2rem",
          borderRadius: "50%",
          width: "2rem",
          marginRight: "10px",
          marginLeft: "10px",
        }}
      ></img>
    </div>
  );
};

export default HideablesNavbar;
