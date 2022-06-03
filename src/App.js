import React, { useState, useEffect } from "react";
import "./App.css";
import { HomePage, SingupPageUI, LoginPage } from "./pages/pageHub";
import NavbarHeader from "./Components/NavbarHeader/NavbarHeader";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { app } from "./firebase/config";
import Loader from "./Components/Loader";
const App = () => {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const auth = getAuth(app);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log(user);
        setIsLoading(false);
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        // console.log("herein");
        setIsUserLogged(true);
      } else {
        setIsLoading(false);
        setIsUserLogged(false);
      }
    });
  }, []);

  if (isLoading) return <Loader />;
  return (
    <Router>
      <NavbarHeader isUserLogged={isUserLogged} />
      <Routes>
        <Route path="/" element={isUserLogged ? <HomePage /> : <LoginPage />} />
        <Route
          path="/signup"
          element={isUserLogged ? <HomePage /> : <SingupPageUI />}
        />
      </Routes>
    </Router>
  );
};

export default App;
