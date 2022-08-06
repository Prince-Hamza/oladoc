import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import Nav_bar from "./components/navbar/nav_bar";
import Banner from "./components/hero/banner";
import Badges from "./components/badges/badges";

export default function Main() {
  const navigate = useNavigate();
  return (
    // <div onClick={() => { navigate('/plan') }}> React Starter App </div>

    <Container fluid>
      <Nav_bar />
      <Banner />
      <Badges />
    </Container>
  );
}
