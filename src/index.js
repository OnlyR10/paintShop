import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { GlobalStyles } from "./GlobalStyles";
import "./index.css";
import { Router } from "./Routes/Router";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter basename="/paintShop">
      <GlobalStyles />
      <Router />
    </BrowserRouter>
  </React.StrictMode>
);
