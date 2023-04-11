import { Route, Routes } from "react-router-dom";

import React from "react";

import CustomerForm from "./components/customers/customer_form";
import RegistrationPage from "./components/registration/registration";
import Login from "./components/login";
import Navbar from "./components/global/navbar";
import CourseList from "./components/courses/course_list";
import Subscribe from "./components/courses/subscribe";
import Successful from "./components/courses/successful";
import UserProfile from "./components/user_profile";
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

    <div className="h-100">
      <Navbar></Navbar>
      <div className="container wrapper h-100">
        <Routes>
          <Route path="/" element={<CourseList />} />
          <Route path="/registration" element={<RegistrationPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/courses" element={<CourseList />} />
          <Route path="/subscribe" element={<Subscribe />} />
          <Route path="/successful" element={<Successful />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
