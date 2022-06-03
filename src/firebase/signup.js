import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from "./config";
import { createDoc } from "../firebasefunctions/creatingDoc";
const auth = getAuth(app);
export const signUp = (email, password, error, seterror, name, dob) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      createDoc(name, user.uid, email, dob, error, seterror);
      // ...
    })
    .catch((er) => {
      const errorTy = "danger";
      const errorMessa = er.message;
      seterror({ ...error, errorType: errorTy, errorMessage: errorMessa });
      // ..
    });
};
