import React, { useEffect, useRef } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Context } from "../config/context";
import { useResize } from "../hooks/useResize";
import { Container } from "./styles";

export const Layout = () => {
  const resize = useResize();
  const jivoRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.id = "jivo";
    script.src = "//code.jivo.ru/widget/Kxr1QZC8QM";
    document.body.append(script);

    let observer = new MutationObserver(() => {
      if (!jivoRef.current)
        jivoRef.current = document.body.getElementsByTagName("jdiv")[0];
    });

    observer.observe(document.body, {
      childList: true,
    });
  }, []);

  useEffect(() => {
    const jivo = jivoRef.current?.style;
    if (jivo) {
      resize.tablet ? (jivo.display = "none") : (jivo.display = "");
    }

    // console.dir(jivoRef.current);
    // TODO jivo исчезает, когда происходит resize экрана
    // TODO но не когда экран изначально маленький (тогда jivo все-равно загружается)
  }, [resize.tablet, jivoRef.current]);

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
