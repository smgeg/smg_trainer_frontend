import React from "react";
import Avatar from "react-avatar";
import { Col, Container, Row } from "react-bootstrap";
import "./style.module.css";

const UserProfile = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Container>
      <Row className="justify-content-center mt-3">
        <Avatar name={user.name} round={50} className="p-0"></Avatar>
        <h4 className="text-center mt-3 mx-auto">{user.name}</h4>
      </Row>
    </Container>
  );
};

export default UserProfile;
