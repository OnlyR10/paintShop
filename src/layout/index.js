import React, { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Context } from "../config/context";
import { useResize } from "../hooks/useResize";
import { Container, FallbackContainer } from "./styles";

export const Layout = () => {
  const resize = useResize();

  return (
    <Context.Provider value={resize}>
      <Container>
        <Header />

        <Suspense fallback={<FallbackContainer>Loading...</FallbackContainer>}>
          <Outlet />
        </Suspense>

        <Footer />
      </Container>
    </Context.Provider>
  );
};
