import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "./styles";
import { Header } from "../components/Header/Header.js";
import { Footer } from "../components/Footer/Footer.js";
import { useResize } from "../hooks/useResize";
import { Context } from "../config/context";

export const Layout = () => {
  const resize = useResize();

  return (
    <Context.Provider value={resize}>
      <Container>
        <Header />
        <Outlet />
        <Footer />
      </Container>
    </Context.Provider>
  );
};
