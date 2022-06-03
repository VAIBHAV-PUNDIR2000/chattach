import { app } from "../firebase/config";
import { getAuth } from "firebase/auth";

const auth = getAuth(app);
export const signout = () => {
  auth.signOut();
};
