import React from "react";
import { Link } from "react-router-dom";
import {
  CardContainer,
  CardBody,
  Flag,
  CardTitle,
  CardContinent,
  CardButton,
  AlphaCode,
} from "./styles";

const Card = ({ alpha_code, flag, name, continent }) => {
  return (
    <CardContainer>
      <AlphaCode>{alpha_code}</AlphaCode>
      <CardBody>
        <Flag src={flag} alt="" />
        <CardTitle>{name}</CardTitle>
        <CardContinent>{continent}</CardContinent>
      </CardBody>

      <Link to={`/country/${alpha_code}`}>
        <CardButton>More info</CardButton>
      </Link>
    </CardContainer>
  );
};

export default Card;
