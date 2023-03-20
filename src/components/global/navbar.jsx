import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
function NavigationBar() {
  return (
    <Navbar className="shadow-sm" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            width="100"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="fs-5 fw-bold mx-3">
              الرئيسية
            </Nav.Link>
            <div class="vr my-auto" style={{ height: "24px" }}></div>
            <Nav.Link href="#courses" className="fs-5 fw-bold mx-3">
              كورساتنا
            </Nav.Link>
            <div class="vr my-auto" style={{ height: "24px" }}></div>
            <Nav.Link href="#about-us" className="fs-5 fw-bold mx-3">
              من نحن
            </Nav.Link>
            <div class="vr my-auto" style={{ height: "24px" }}></div>

            <Nav.Link href="#contact-us" className="fs-5 fw-bold mx-3">
              اتصل بنا
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
