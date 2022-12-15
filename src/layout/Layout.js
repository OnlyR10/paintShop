import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../components/Header/Header.js";
import { Footer } from "../components/Footer/Footer.js";

export const Layout = () => {
  return (
    <Container>
      <Header>Footer</Header>
      <Outlet />
      <Footer>Footer</Footer>
    </Container>
  );
};
