import { collection, addDoc } from "firebase/firestore";
import { db } from "./firestoreConfig";

export const createDoc = (name, id, email, dob, error, seterror) => {
  try {
    const docRef = addDoc(collection(db, "users"), {
      name: name,
      id: id,
      born: dob,
      email: email,
    });
    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
    seterror({ ...error, errorMessage: e, errorType: "danger" });
  }
  return;
};
