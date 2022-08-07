import React from "react";
import { Container } from "react-bootstrap";
import "./card.css";

const CardPremium = () => {
  return (
    <Container className="card">
      <h2>XYZ</h2>
      <img
        src="https://www.venturedive.com/wp-content/themes/venturedive/images/logo.svg"
        height={100}
        width={100}
        alt="My pic"
        className="teacher_img"
      />
      <span class="teacher_title">Prof. Daniyal </span>
      <span class="teacher_experience">2 years experience</span>
      <span class="teacher_designation">Senior software engineer</span>
      <div className="d-flex w-100 justify-content-between px-2 mt-5">
        <div className="d-flex flex-column justify-content-center align-items-center">
          <span className="review">22</span>
          <span className="desc_text text-center">Students revies</span>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center">
          {" "}
          <span className="rate">90%</span>
          <span className="desc_text text-center">Satisfaction rate</span>
        </div>
      </div>
    </Container>
  );
};

export default CardPremium;
