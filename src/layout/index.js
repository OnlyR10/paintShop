import React, { Suspense, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Context } from "../config/context";
import { useResize } from "../hooks/useResize";
import { Container, FallbackContainer } from "./styles";

export const Layout = () => {
  const resize = useResize();

  useEffect(() => {
    const script = document.createElement("script");
    const jivo = document.getElementById("jivo");

    const loadScript = (url) => {
      script.id = "jivo";
      script.src = url;
      document.body.append(script);
    };

    if (resize.smartphone && jivo) {
      window.jivo_destroy();
      jivo.remove();
    } else if (!resize.smartphone && !jivo) {
      loadScript("//code.jivo.ru/widget/Kxr1QZC8QM");
    }
  }, [resize.smartphone]);

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
