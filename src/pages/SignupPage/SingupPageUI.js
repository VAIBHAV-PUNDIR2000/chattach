import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import LoginAlert from "../../Components/LoginAlert/LoginAlert";
import NavbarHeader from "../../Components/NavbarHeader/NavbarHeader";
import { signupHandler } from "./SignupPageLogic";
import "./style.css";
const SingupPageUI = () => {
  const navigate = useNavigate();
  const [userDet, setUserdet] = useState({
    email: "",
    password: "",
    name: "",
    DOB: Date.now(),
  });

  const [error, setError] = useState({
    errorMessage: "",
    errorType: "",
  });

  // console.log(error);
  return (
    <div className="signup-page">
      <NavbarHeader />
      <div className="card">
        <h1
          style={{ textAlign: "center", fontWeight: 200, marginBottom: "50px" }}
        >
          USER LOGIN
        </h1>
        <div>
          <Form.Group className="mb-3" controlId="formBasicText">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Your Name"
              onChange={(e) => {
                setUserdet({ ...userDet, name: e.target.value });
                setError({ error, errorMessage: "" });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setUserdet({ ...userDet, email: e.target.value });
                setError({ error, errorMessage: "" });
              }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="date"
              placeholder="Enter email"
              onChange={(e) => {
                setUserdet({ ...userDet, DOB: e.target.value });
                setError({ error, errorMessage: "" });
              }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              onChange={(e) => {
                setError({ error, errorMessage: "" });
                setUserdet({ ...userDet, password: e.target.value });
              }}
              placeholder="Password"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <div className="form-bottom">
            <Button
              variant="dark"
              type="submit"
              onClick={() =>
                signupHandler(
                  userDet.name,
                  userDet.email,
                  userDet.DOB,
                  userDet.password,
                  error,
                  setError
                )
              }
            >
              Submit
            </Button>
            <p onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
              Already Have an Account ? Click here
            </p>
          </div>
          <LoginAlert
            errorMessage={error.errorMessage}
            errorType={error.errorType}
          />
        </div>
      </div>
    </div>
  );
};

export default SingupPageUI;
