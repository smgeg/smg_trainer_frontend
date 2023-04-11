import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App.js";

import "react-notifications/lib/notifications.css";

import "bootstrap/dist/css/bootstrap.min.css";
import UserProvider from "./components/UserProvider";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <UserProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UserProvider>
  </React.StrictMode>
);
// <AppRoute path={"/trainers"} component={Trainers} />
// <AppRoute path={"/programs"} component={Programs} />
// <AppRoute path={"/"} component={Home} />
