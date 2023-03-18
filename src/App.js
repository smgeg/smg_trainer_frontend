import { BrowserRouter, Route, Routes } from "react-router-dom";

import React from "react";

import Layout from "./components/global/Main";
import CustomerForm from "./components/customers/customer_form";
import RegistrationPage from "./components/registration/registration";
const App = ({ component: Component, rest }) => {
  return (
    // <Route
    //   {...rest}
    //   render={(routeProps) => (
    //     <Layout>
    //       <Component {...routeProps} />
    //     </Layout>
    //   )}
    // />

    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<CustomerForm />} />
        <Route exact path="/registration" element={<RegistrationPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
