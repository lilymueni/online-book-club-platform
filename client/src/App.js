import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BookClub from "./components/BookClub";
import Footer from "./components/Footer";
import Podcast from "./components/Podcast";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Auto-login
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  // Comment out the conditional rendering of Login
  // if (!user) return <Login onLogin={setUser} />;

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bookclubs" element={<BookClub />} />
          <Route path="/podcast" element={<Podcast />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
