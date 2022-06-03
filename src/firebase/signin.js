import { app } from "../firebase/config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(app);
export const signin = (email, password, seterror, error) => {
  signInWithEmailAndPassword(auth, email, password)
    .then()
    .catch((e) => {
      seterror({ ...error, errorMessage: e.message, errorType: "danger" });
    });
};
