import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../src/images/logo.png"; 

function NavBar({ user, setUser }) {
  function handleLogoutClick() {
    fetch("/logout", { method: "DELETE" }).then((r) => {
      if (r.ok) {
        setUser(null);
      }
    });
  }

  return (
    <Wrapper>
      <LeftSection>
        <Logo>
          <img src={logo} alt="Logo" />
        </Logo>
        <StyledText>
          <Link to="/">GEN-Z BOOKCLUB</Link>
        </StyledText>
      </LeftSection>
      <Nav>
        <StyledLink to="/">Home</StyledLink>
        <StyledLink to="/contact">Contact Us</StyledLink>
        <StyledLink to="/bookclubs">Bookclubs</StyledLink>
        <StyledLink to="/blog">Blog</StyledLink>
        {user ? (
          <Button variant="outline" onClick={handleLogoutClick}>
            Logout
          </Button>
        ) : (
          <>
            <StyledLink to="/login">Login</StyledLink>
            <StyledLink to="/signup">Sign Up</StyledLink>
          </>
        )}
      </Nav>
    </Wrapper>
  );
}

const Wrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  img {
    height: 50px;
    margin-right: 10px;
  }
`;

const StyledText = styled.h1`
  font-family: "Permanent Marker", cursive;
  font-size: 2rem;
  color: deeppink;
  margin: 0;

  a {
    color: inherit;
    text-decoration: none;
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: #333;
  text-decoration: none;
  font-size: 1rem;
  padding: 5px 10px;
  border-radius: 5px;

  &:hover {
    background-color: #e9ecef;
  }
`;

export default NavBar;
