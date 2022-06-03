import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Logic.css";
import { Form, Button } from "react-bootstrap";
import { loginHandler } from "./LoginPageLogic";
import LoginAlert from "../../Components/LoginAlert/LoginAlert";
import { useNavigate } from "react-router-dom";
import NavbarHeader from "../../Components/NavbarHeader/NavbarHeader";

const LoginPage = () => {
  const navigate = useNavigate();
  const [userDet, setUserdet] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState({
    errorMessage: "",
    errorType: "",
  });

  // console.log(error);
  return (
    <div className="login-page">
      <div className="card">
        <h1
          style={{ textAlign: "center", fontWeight: 200, marginBottom: "50px" }}
        >
          USER LOGIN
        </h1>
        <div>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(e) => {
                setUserdet({ ...userDet, email: e.target.value });
                setError({ error, errorMessage: "" });
              }}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
                loginHandler(userDet.email, userDet.password, setError, error)
              }
            >
              Submit
            </Button>
            <p
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer" }}
            >
              Dont Have an Account?? Click here
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

export default LoginPage;
