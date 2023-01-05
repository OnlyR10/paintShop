import React from "react";
import { Route, Routes } from "react-router-dom";
import { NonExistingPage } from "../components/NonExistingPage/NonExistingPage";
import { Layout } from "../layout/Layout";
import { About } from "../pages/About/container/About";
import { Main } from "../pages/Main/container/Main";
import { Palette } from "../pages/Palette/container/Palette";
import { Products } from "../pages/Products/container/Products";

export const Router = () => {
  return (
    <Routes>
      <Route path={"*"} element={<NonExistingPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/products" element={<Products />} />
        {/* <Route path="/products/:id" element={<Products />} /> */}
        <Route path="/palette" element={<Palette />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};
