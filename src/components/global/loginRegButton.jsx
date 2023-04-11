import React from "react";
import { Nav } from "react-bootstrap";

function LoginRegButton() {
  return (
    <Nav className="float-end">
      <Nav.Link href="/login" className="fs-6 fw-bold text-black link-danger">
        تسجيل الدخول
      </Nav.Link>
      <div class="vr my-auto" style={{ height: "24px" }}></div>

      <Nav.Link
        href="/registration"
        className="fs-6 fw-bold  text-black link-danger"
      >
        حساب جديد
      </Nav.Link>
    </Nav>
  );
}

export default LoginRegButton;
