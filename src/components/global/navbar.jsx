// import React from "react";
// import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";

import React, { useContext } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import UserAvatar from "./avatar";
import LoginRegButton from "./loginRegButton";
import UserContext from "../../context/UserContext";

function ArabicNavbar() {
  const { token } = useContext(UserContext);
  const isTokenValid = token || localStorage.getItem("token");
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="light"
      variant="light"
      sticky="top"
      className="shadow-sm"
    >
      <Container>
        <Navbar.Brand href="#home" className="float-start">
          <img
            src={logo}
            height={75}
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto">
            <Nav.Link
              href="#home"
              className="fs-6 fw-bold mx-3 text-black link-danger"
            >
              الرئيسية
            </Nav.Link>
            <div class="vr my-auto" style={{ height: "24px" }}></div>
            <Nav.Link
              href="#courses"
              className="fs-6 fw-bold mx-3 text-black link-danger"
            >
              كورساتنا
            </Nav.Link>
            <div class="vr my-auto" style={{ height: "24px" }}></div>
            <Nav.Link
              href="#about-us"
              className="fs-6 fw-bold mx-3 text-black link-danger"
            >
              من نحن
            </Nav.Link>
            <div class="vr my-auto" style={{ height: "24px" }}></div>

            <Nav.Link
              href="#contact-us"
              className="fs-6 fw-bold mx-3 text-black link-danger"
            >
              اتصل بنا
            </Nav.Link>
          </Nav>
          {isTokenValid ? <UserAvatar /> : <LoginRegButton />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default ArabicNavbar;

// function NavigationBar() {
//   return (
//     <Navbar className="shadow-sm" bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">
//           <img
//             src={logo}
//             width="100"
//             className="d-inline-block align-top"
//             alt="Logo"
//           />
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
// <Nav.Link href="#home" className="fs-6 fw-bold mx-3">
//   الرئيسية
// </Nav.Link>
// <div class="vr my-auto" style={{ height: "24px" }}></div>
// <Nav.Link href="#courses" className="fs-6 fw-bold mx-3">
//   كورساتنا
// </Nav.Link>
// <div class="vr my-auto" style={{ height: "24px" }}></div>
// <Nav.Link href="#about-us" className="fs-6 fw-bold mx-3">
//   من نحن
// </Nav.Link>
// <div class="vr my-auto" style={{ height: "24px" }}></div>

// <Nav.Link href="#contact-us" className="fs-6 fw-bold mx-3">
//   اتصل بنا
// </Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default NavigationBar;
