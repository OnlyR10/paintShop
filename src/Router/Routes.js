import React, { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "../layout";
import { ROUTE_NAMES } from "./routerNames";

const NonExistingPage = lazy(() => import("../components/NonExistingPage"));
const About = lazy(() => import("../pages/About"));
const Main = lazy(() => import("../pages/Main/container"));
const Palette = lazy(() => import("../pages/Palette"));
const Product = lazy(() => import("../pages/Product/container"));
const Categories = lazy(() =>
  import("../pages/Products/components/Categories")
);
const Products = lazy(() => import("../pages/Products/container"));

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
