import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout/Layout";
import { About } from "../pages/About/About";
import { Main } from "../pages/Main/Main";
import { Palette } from "../pages/Palette/Palette";
import { Products } from "../pages/Products/Products";

export const Router = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/" element={<Palette />} />
        <Route path="/" element={<About />} />
      </Route>
    </Routes>
  );
};
