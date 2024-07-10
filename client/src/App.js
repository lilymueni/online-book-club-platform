import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from "./pages/Login";

const App = () => {
  const [user, setUser] = useState(null);
  //Immediately a user visits the page,
  //use effect to check if user session exists, if session exists,
  //setUser to the user after fectch, else, render the Login component which will inturn render the LoginForm or signUpForm    useEffect(() => {
  // auto-login
  useEffect(() => {
    // auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;
  return (
    <>
      <NavBar user={user} setUser={setUser} />
      <main>
        {/* 
        <Routes>
            <Route path="/newbookclub" element={<NewBookClub />} />
            <Route path="/" element={<BookClub />} />
        </Routes> */}
      </main>
    </>
  );
};

export default App;
