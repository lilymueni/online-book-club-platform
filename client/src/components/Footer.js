import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <Wrapper>
      <Section>
        <SectionTitle>Quick Links</SectionTitle>
        <NavItem>Home</NavItem>
        
        <NavItem>Book Club</NavItem>
        
        <NavItem>Podcast</NavItem>
        <NavItem>Blog</NavItem>
        
        <NavItem>About</NavItem>
        
        <NavItem>Contact</NavItem>
        
      </Section>
      <Section>
        <SectionTitle>Connect with us</SectionTitle>
        <SocialMedia>
          <SocialLink href="#">👍</SocialLink>
          <SocialLink href="#">🌐</SocialLink>
          <SocialLink href="#">🐦</SocialLink>
          <SocialLink href="#">🔗</SocialLink>
          <SocialLink href="#">📸</SocialLink>
        </SocialMedia>
      </Section>
      <Section>
        <SectionTitle>Business Hours</SectionTitle>
        <BusinessHours>
          <div>Mon - Sat: 9:00 am - 6:00 pm</div>
          <div>Sunday: Closed</div>
          <div>Public Holidays: Closed</div>
        </BusinessHours>
      </Section>
      <Section>
        <SectionTitle>Contact</SectionTitle>
        <ContactInfo>
          <div>Sarrina , Suite 12</div>
          <div>Game House, Eldoret, Kenya</div>
          <div>+254 743 356 112</div>
          <div>info@generationZ.co.ke</div>
        </ContactInfo>
      </Section>
      <FooterBottom>
        <Logo>GenZBookCLubs</Logo>
        <Rights>© 2024 All Rights Reserved | GenZBookCLubs| Privacy Policy | Terms & Conditions | FAQ</Rights>
      </FooterBottom>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  background-color: #7e76f9; /* Updated background color */
  color: black;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
`;

const Section = styled.div``;

const SectionTitle = styled.h4`
  margin-bottom: 10px;
  font-weight: bold;
`;

const NavItem = styled.div`
  margin-bottom: 5px;
  cursor: pointer;
`;

const SocialMedia = styled.div`
  display: flex;
  gap: 10px;
  font-size: 1.5rem;
`;

const SocialLink = styled.a`
  color: black;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    color: pink;
  }
`;

const BusinessHours = styled.div``;

const ContactInfo = styled.div`
  div {
    margin-bottom: 5px;
  }
`;

const FooterBottom = styled.div`
  grid-column: span 4;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const Rights = styled.div`
  font-size: 0.9rem;
`;

export default Footer;
