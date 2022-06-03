import React from "react";
import { Container, Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import HideablesNavbar from "./HideablesNavbar";
import { GiExtraLucid } from "react-icons/gi";
const NavbarHeader = (props) => {
  // console.log(props);
  return (
    <div>
      <Navbar
        variant="dark"
        bg="dark"
        expand="lg"
        fixed="top"
        style={{
          boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        }}
      >
        <Container fluid>
          <Navbar.Brand style={{ userSelect: "none" }}>
            <GiExtraLucid style={{ marginRight: "5px", fontSize: "40px" }} />
            Chattach
          </Navbar.Brand>
          {props.isUserLogged ? <HideablesNavbar /> : ""}
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarHeader;
