import React, { useState, useEffect } from "react";
import { Container, InputGroup, Form, Button, Row } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";
import "./banner.css";

const Banner = () => {
  const openPanel = () => {
    if (citiesOpen) return "block";
    else return "none";
  };
  const tags = ["200,000+ patient reviews", "2500+ doctors", "Best services"];
  const cities = [
    "Karachi",
    "Lahore",
    "Islamabad",
    "Multan",
    "Sukkur",
    "Hyderabad",
  ];
  const [tag, setTag] = useState("");
  const [citiesOpen, setCityOpen] = useState(false);

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

        <Row class="position-relative">
          <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search User"
              aria-label="Search User"
              aria-describedby="basic-addon2"
              className="search_bar"
              onClick={() => {
                setCityOpen(!citiesOpen);
              }}
            />
            <Button id="button-addon2" className="search_button">
              Search
            </Button>
            <div className={`top-100 dropdown_panel d-${openPanel()}`}>
              {cities.map((city) => (
                <div className="panel_option">
                  <div className="m-2">
                    <FeatherIcon icon="search" style={{ fill: "white" }} />
                  </div>
                  <div className="m-2 d-flex justify-content-center">
                    <p>{city}</p>
                  </div>
                </div>
              ))}
            </div>
          </InputGroup>

          {/* <InputGroup className="mb-3">
            <Form.Control
              placeholder="Search User"
              aria-label="Search User"
              aria-describedby="basic-addon2"
              className="search_bar"
            />
            <Button id="button-addon2" className="search_button">
              Search
            </Button>
          </InputGroup> */}
        </Row>
        <Row className="d-flex justify-content-center my-5">
          <span className="moving_tags w-25">{tag}</span>
        </Row>
      </Container>
    </Container>
  );
};

export default Banner;
