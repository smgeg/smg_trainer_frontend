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
            <Nav.Link href="#home">الرئيسية</Nav.Link>
            <Nav.Link href="#courses">كورساتنا</Nav.Link>
            <Nav.Link href="#about-us">من نحن</Nav.Link>
            <Nav.Link href="#contact-us">اتصل بنا</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
