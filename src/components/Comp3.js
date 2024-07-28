// Comp3.js
import React from "react";
import styled from "styled-components";

const Comp3Container = styled.div`
  padding: 2rem;
  background-color: #cce6ff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const Image = styled.img`
  max-width: 45%;
  height: auto;
  margin: 0.5rem;
`;

const Comp3 = () => (
  <Comp3Container>
    <div>
      <Image src="https://via.placeholder.com/200" alt="Comp3 Image 1" />
      <Image src="https://via.placeholder.com/200" alt="Comp3 Image 2" />
    </div>
    <p>Some text accompanying the images in Comp3.</p>
  </Comp3Container>
);

export default Comp3;
