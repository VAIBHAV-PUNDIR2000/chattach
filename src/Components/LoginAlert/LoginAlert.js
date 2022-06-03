import { Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../LoginAlert/Loginalert.css";

import React from "react";

const LoginAlert = ({ errorMessage: message, errorType: type }) => {
  return (
    <Alert className="AlertBox" show={message} variant={type}>
      {message}
    </Alert>
  );
};

export default LoginAlert;
