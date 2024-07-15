import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BookClub from "./components/BookClub";
import Footer from "./components/Footer";
import Podcast from "./components/Podcast";

import Login from "./pages/Login";
import BookClubPage from "./pages/BookClubPage";

const App = () => {
  const [user, setUser] = useState(null);
  
  const backendUrl = "https://backend-bookclub-ftv9.onrender.com/";

  useEffect(() => {
    fetch(`${backendUrl}/check_session`).then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  if (!user) return <Login onLogin={setUser} />;

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          <Route path="/book_clubs/:id" element={<BookClubPage />} />
          <Route path="/book_clubs" element={<BookClub />} />
          <Route path="/podcast" element={<Podcast />} />
          <Route path="/logout" element={<Login />} />
          {/* Add other routes as needed */}
        </Routes>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
