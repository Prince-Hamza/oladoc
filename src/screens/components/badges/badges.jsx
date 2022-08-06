import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import FeatherIcon from "feather-icons-react";

const Badges = () => {
  const badges = [
    "Chemistry",
    "Mathematics",
    "Physics",
    "Computer",
    "Accounting",
    "Economics",
  ];

  return (
    <Container className="p-5 my-5">
      <Row className="p-4">
        {badges.map((item) => {
          return (
            <Col
              xs={4}
              // md={4}
              lg={2}
              className="d-flex flex-column justify-content-center align-items-center mb-2"
            >
              {" "}
              <div
                className=" rounded-circle mb-2 d-flex justify-content-center align-items-center"
                style={{ width: "4rem", height: "4rem", background: "#333485" }}
              >
                <FeatherIcon icon="book" style={{ fill: "white" }} />
              </div>
              <div>{item}</div>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Badges;
