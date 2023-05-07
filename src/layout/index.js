import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Context } from "../config/context";
import { useResize } from "../hooks/useResize";
import { Container } from "./styles";

export const Layout = () => {
  const resize = useResize();

  useEffect(() => {
    resize.smartphone ? window.jivo_destroy() : window.jivo_init();
  }, [resize.smartphone]);

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
