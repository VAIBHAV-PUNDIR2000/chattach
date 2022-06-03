import { createDoc } from "../../firebasefunctions/creatingDoc";
import { signUp } from "./../../firebase/signup";

export const signupHandler = (name, email, dob, password, error, seterror) => {
  if (email.length === 0) {
    seterror({
      ...error,
      errorMessage: "Enter Vailed Email",
      errorType: "danger",
    });
  }
  if (name.length === 0) {
    seterror({
      ...error,
      errorMessage: "Name Cant be blank",
      errorType: "danger",
    });
  }

  if (password.length < 8) {
    seterror({
      ...error,
      errorMessage: "Passwords invailed",
      errorType: "danger",
    });
  }

  if (error.errorMessage === "") {
    signUp(email, password, error, seterror, name, dob);
  }
};
