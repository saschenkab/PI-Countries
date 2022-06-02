import React from "react";
import { useSelector } from "react-redux";
import Card from "../card/index.js";
import { Loader } from "../loader/index.js";
import styled from "styled-components";

const CardsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Cards = ({ countries }) => {
  const loading = useSelector((state) => state.loading);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      {Array.isArray(countries) && countries.length > 0 ? (
        <CardsWrapper>
          {countries.map((country) => (
            <Card
              key={country.alpha_code}
              alpha_code={country.alpha_code}
              flag={country.flag}
              name={country.name}
              continent={country.continent}
            />
          ))}
        </CardsWrapper>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Cards;
