import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes } from "react-router-dom";
import App from "./App.js";
import Trainers from "./components/trainers";
import Programs from "./components/programs";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/global/navbar";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// <AppRoute path={"/trainers"} component={Trainers} />
// <AppRoute path={"/programs"} component={Programs} />
// <AppRoute path={"/"} component={Home} />
