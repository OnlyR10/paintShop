import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { BASE_NAME } from "./constants/Roots";
import { GlobalStyles } from "./GlobalStyles";
import "./index.css";
import { Router } from "./Router/Routes";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename={BASE_NAME}>
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
