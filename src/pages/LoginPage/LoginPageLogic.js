import { signin } from "../../firebase/signin";

export const loginHandler = (email, password, seterror, error) => {
  if (email.length === 0) {
    seterror({
      ...error,
      errorMessage: "Enter Vailed Email",
      errorType: "danger",
    });
  } else if (password.length < 8) {
    seterror({
      ...error,
      errorMessage: "Passwords invailed",
      errorType: "danger",
    });
  } else {
    signin(email, password, seterror, error);
  }
};
