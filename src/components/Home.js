import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  /* background: blue; */
`;

const Home = () => {
  return <Container></Container>;
};

export default Home;
