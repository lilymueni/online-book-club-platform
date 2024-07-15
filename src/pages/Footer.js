import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterWrapper>
      <FooterText>© 2024 GEN-Z BOOKCLUB. All Rights Reserved.</FooterText>
    </FooterWrapper>
  );
}

const FooterWrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  background-color: #333;
  color: #fff;
  position: fixed;
  width: 100%;
  bottom: 0;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 1rem;
`;

export default Footer;
