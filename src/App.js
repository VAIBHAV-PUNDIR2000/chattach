import React, { useState, useEffect } from "react";
import "./App.css";
import { HomePage, SingupPageUI, LoginPage } from "./pages/pageHub";
import NavbarHeader from "./Components/NavbarHeader/NavbarHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/config";
import Loader from "./Components/Loader";
import { userContext } from "./store/usercontext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebasefunctions/firestoreConfig";
const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [userData, setUserData] = useState([]);
  const [userId, setUserId] = useState("");
  const [currentChatTabUser, setCurrentChatTabUser] = useState();

  const auth = getAuth(app);
  // console.log({ userData });

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUserId(auth.currentUser.uid);
        setIsUserLogged(true);

        setIsLoading(false);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;

        const call = async () => {
          const querySnapshot = await getDocs(collection(db, "users"));
          const ar = [];
          querySnapshot.forEach((doc) => {
            ar.push(doc.data());
          });

          setUserData(...userData, ar);
        };
        call();

        // console.log("herein");
      } else {
        setIsUserLogged(false);
        setIsLoading(false);
      }
    });
  }, [auth]);

  if (isLoading) return <Loader />;
  return (
    <userContext.Provider
      value={{
        userData,
        setUserData,
        userId,
        currentChatTabUser,
        setCurrentChatTabUser,
      }}
    >
      <Router>
        <NavbarHeader isUserLogged={isUserLogged} />
        <Routes>
          <Route
            path="/"
            element={isUserLogged ? <HomePage /> : <LoginPage />}
          />
          <Route
            path="/signup"
            element={isUserLogged ? <HomePage /> : <SingupPageUI />}
          />
          <Route path="*" element={<p>error 404 not found</p>} />
        </Routes>
      </Router>
    </userContext.Provider>
  );
};

export default App;
