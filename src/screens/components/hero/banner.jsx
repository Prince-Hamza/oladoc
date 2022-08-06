import React, { useState, useEffect } from "react";
import { Container, InputGroup, Form, Button, Row } from "react-bootstrap";
import "./banner.css";

const Banner = () => {
  const tags = ["200,000+ patient reviews", "2500+ doctors", "Best services"];

  const [tag, setTag] = useState("");

  useEffect(() => {
    tags.map((val, index) =>
      setTimeout(() => {
        setTag(tags[index]);
      }, 10000)
    );
  }, []);

  return (
    <Container fluid className="home_banner">
      <Container className="d-flex flex-column ">
        <Row>
          <span className="banner_text text-center">
            Find and book the <span className="special_banner_text">best</span>{" "}
            teachers near you
          </span>
        </Row>

        <Row>
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search User"
              aria-label="Search User"
              aria-describedby="basic-addon2"
              className="search_bar"
            />
            <Button id="button-addon2" className="search_button">
              Search
            </Button>
          </InputGroup>
        </Row>
        <Row className="d-flex justify-content-center my-5">
          <span className="moving_tags w-25">{tag}</span>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;
