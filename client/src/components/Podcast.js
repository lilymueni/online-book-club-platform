import React from "react";
import styled from "styled-components";
import comingSoon from "../assets/comingSoon.jpg"; // Ensure this path is correct

const Podcast = () => {
  return (
    <Wrapper>
      <Image src={comingSoon} alt="Coming Soon" />
      <p>©GenZ</p>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: calc(
    100vh - 100px - 50px
  ); /* Adjust based on your navbar and footer height */
  padding: 20px;
  background-color: #f0f0f0; /* Light background color */
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

export default Podcast;
