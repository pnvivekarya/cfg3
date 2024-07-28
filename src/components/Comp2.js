// Comp2.js
import React from "react";
import styled from "styled-components";

const Comp2Container = styled.div`
  padding: 2rem;
  background-color: #e6f2ff;
  text-align: center;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin-bottom: 1rem;
`;

const Comp2 = () => (
  <Comp2Container>
    <Image src="https://via.placeholder.com/400" alt="Comp2 Image" />
    <p>Some text below the image in Comp2.</p>
  </Comp2Container>
);

export default Comp2;
