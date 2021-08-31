import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: #00d14c;
  justify-content: center;
  align-items: center;
  display: flex;
  border-radius: 30px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border: solid;
    box-shadow: rgb(0 0 0 / 80%) 0 16px 40px -15px,
      rgb(0 0 0 / 73%) 0 29px 53px -20px;
    transition: all 250ms;
  }
`;

const Series = () => {
  return <Container></Container>;
};

export default Series;
