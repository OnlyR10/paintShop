import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import { Router } from "./Router/Routes";
import { BASE_NAME } from "./constants/roots";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_NAME}>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
