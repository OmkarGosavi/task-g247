import React from "react";
import "./Card.scss";
import Heading from "../Heading/Heading";
import CardBody from "../CardBody/CardBody";

const Card = () => {
  return (
    <div className="card-container">
      <Heading />
      <CardBody />
    </div>
  );
};

export default Card;
