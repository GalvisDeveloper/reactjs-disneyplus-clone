import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: calc(100vh - 70px);
  position: relative;

  &:before {
    background-position: top;
    /* background-size: cover; */
    background-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    bottom: 0;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    z-index: -1;
  }
`;

const Content = styled.div``;

const Logo = styled.div``;

const Button = styled.div``;

const Login = () => {
  return <Container>Login</Container>;
};

export default Login;
