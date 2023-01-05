import React from "react";
import { Outlet } from "react-router-dom";
import { Container, Wrapper } from "./styles";
import { Header } from "../components/Header/Header.js";
import { Footer } from "../components/Footer/Footer.js";

export const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet />
      <Footer />
    </Container>
  );
};
