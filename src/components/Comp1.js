// Comp1.js
import React from "react";
import styled from "styled-components";

const Comp1Container = styled.div`
  background-image: url("https://via.placeholder.com/800");
  background-size: cover;
  background-position: center;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  position: relative;
`;

const ScrollButton = styled.button`
  position: absolute;
  bottom: 10px;
  background-color: #007acc;
  border: none;
  color: white;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;

  &:hover {
    background-color: #005f99;
  }
`;

const Comp1 = ({ scrollToComp2 }) => (
  <Comp1Container>
    <h2>Welcome to My Website</h2>
    <p>Some introductory text goes here.</p>
    <ScrollButton onClick={scrollToComp2}>Scroll Down</ScrollButton>
  </Comp1Container>
);

export default Comp1;
