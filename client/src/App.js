import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import BookClub from "./components/BookClub";
import Footer from "./components/Footer";
import Podcast from "./components/Podcast";

import Login from "./pages/Login";
import BookClubPage from "./pages/BookClubPage";
// import Bookclubs from "./components/"

const App = () => {
  //set state for user, will change with respect to different users from db
  const [user, setUser] = useState(null);
  //fetch session data to determine which page to render
  useEffect(() => {
    fetch("/check_session").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);
  //upon fetch, if user doesnt exist in session object/ user iiis null
  //render the login/signup page
  if (!user) return <Login onLogin={setUser} />;

  return (
    <Router>
      <NavBar user={user} setUser={setUser} />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login onLogin={setUser} />} />
          {/* <Route path="/signup" element={<Signup onSignup={setUser} />} /> */}
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
