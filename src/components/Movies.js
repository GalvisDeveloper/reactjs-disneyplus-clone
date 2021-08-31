import React from "react";
import styled from "styled-components";

const Container = styled.div``;

const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 10px;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 / 69%) 0 26px 30px -10px,
    rgb(0 0 0 / 73%) 0 16px 10px -10px;
  overflow: hidden;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

  img {
    height: 100%;
    object-fit: cover;
    width: 100%;
  }

  &:hover {
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow: rgb(0 0 0 / 80%) 0 40px 58px -16px,
      rgb(0 0 0 / 72%) 0 30px 22px -10px;
    transform: scale(1.05);
  }
`;

const Movies = () => {
  return (
    <Container>
      <h4>Recommended for you</h4>
      <Content>
        <Wrap>
          <img
            src="https://www.uao.edu.co/wp-content/uploads/2021/03/Disney-movies.png"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.uao.edu.co/wp-content/uploads/2021/03/Disney-movies.png"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.uao.edu.co/wp-content/uploads/2021/03/Disney-movies.png"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://www.uao.edu.co/wp-content/uploads/2021/03/Disney-movies.png"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;
