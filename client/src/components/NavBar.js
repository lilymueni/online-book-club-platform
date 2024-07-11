import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import logo from './logo1.jpg'; // Adjust the path to your logo image

const NavBar = ({ user, setUser }) => {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <Logo>
        <img src={logo} alt="logo" className="logo" />
        <Link to="/">GenZBookCLubs</Link>
      </Logo>
      <Nav>
        <NavItem as={Link} to="/">
          Home
        </NavItem>
        <NavItem as={Link} to="/blog">
          Blog
        </NavItem>
        <NavItem as={Link} to="/podcast">
          Podcast
        </NavItem>
        <NavItem as={Link} to="/bookclubs">
          Book Clubs
        </NavItem>
        <NavItem onClick={handleLogoutClick}>
          Logout
        </NavItem>
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #7e76f9; /* Lighter shade of pinkish-purple */
  padding: 20px;
  height: 100px; /* Increased height */
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  background-color: #7e76f9; /* Lighter shade of pinkish-purple */
  margin: 0;
  line-height: 1;

  .logo {
    height: 60px; /* Adjust the height of the logo */
    margin-right: 10px; /* Space between the logo and the title */
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavItem = styled.div`
  font-size: 1.2rem;
  color: black;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    color: pink; /* Pink color on hover */
  }
`;

export default NavBar;
