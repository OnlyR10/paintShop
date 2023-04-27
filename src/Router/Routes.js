import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../Layout";
import { NonExistingPage } from "../components/NonExistingPage";
import { About } from "../pages/About";
import { Main } from "../pages/Main/container";
import { Palette } from "../pages/Palette";
import { Product } from "../pages/Product/container";
import { Categories } from "../pages/Products/components/Categories";
import { Products } from "../pages/Products/container";
import { ROUTE_NAMES } from "./routerNames";

export const Router = () => {
  return (
    <Routes>
      <Route
        path={ROUTE_NAMES.NONE_EXISTING_PAGE}
        element={<NonExistingPage />}
      />

      <Route path={ROUTE_NAMES.HOME} element={<Layout />}>
        <Route index element={<Main />} />

        <Route path={ROUTE_NAMES.PRODUCTS} element={<Products />}>
          <Route
            path={ROUTE_NAMES.PRODUCTS_CATEGORIES}
            element={<Categories />}
          />
        </Route>

        <Route path={ROUTE_NAMES.PRODUCT} element={<Product />} />

        <Route path={ROUTE_NAMES.PALETTE} element={<Palette />} />

        <Route path={ROUTE_NAMES.ABOUT} element={<About />} />
      </Route>
    </Routes>
  );
};
