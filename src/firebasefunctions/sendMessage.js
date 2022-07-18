import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "./firestoreConfig";

export const sendMessage = (message, uid, ChatID) => {
  try {
    const docRef = addDoc(collection(db, "messages"));

    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return;
};
a;
