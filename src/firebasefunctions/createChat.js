import { collection, addDoc, setDoc } from "firebase/firestore";
import { db } from "./firestoreConfig";

export const createChat = (currentChatTabUser, user) => {
  try {
    const docRef = addDoc(collection(db, "messages", "users"), [
      currentChatTabUser,
      user,
    ]);

    console.log("Document written with ID: ", docRef.id);
    return docRef;
  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return;
};
