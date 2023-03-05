import React from "react";
import { Route, Routes } from "react-router-dom";
import { NonExistingPage } from "../components/NonExistingPage/NonExistingPage";
import { Layout } from "../layout/Layout";
import { About } from "../pages/About/container/About";
import { Main } from "../pages/Main/container/Main";
import { Palette } from "../pages/Palette/container/Palette";
import { Product } from "../pages/Product/container/Product";
import { Categories } from "../pages/Products/components/Categories/Categories";
import { Products } from "../pages/Products/container/Products";

export const Router = () => {
  return (
    <Routes>
      <Route path={"*"} element={<NonExistingPage />} />

      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/products/" element={<Products />}>
          <Route path="/products/:category" element={<Categories />} />
        </Route>
        <Route path="/products/:category/:name" element={<Product />} />
        <Route path="/palette" element={<Palette />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  );
};
