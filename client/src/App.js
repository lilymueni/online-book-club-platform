import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./pages/Footer";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Bookclubs from "./pages/Bookclubs";
import Blog from "./pages/Blog";
import Signup from "./pages/Signup";
import BookClubPage from "./pages/BookClubPage";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
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
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/bookclubs" element={<Bookclubs />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/signup" element={<Signup onSignup={setUser} />} />
          <Route path="/book-clubs/:id" element={<BookClubPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
