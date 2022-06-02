import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Header from "../../components/headerBar";
import { Loader } from "../../components/loader";
import { getCountryAction } from "../../redux/actions";
import styled from "styled-components";

const Container = styled.div`
  margin-top: 50px;
`;

const CountryDetail = () => {
  const dispatch = useDispatch();
  const { alpha_code } = useParams();
  const country = useSelector((state) => state.country);
  const loading = useSelector((state) => state.loading);

  useEffect(() => {
    dispatch(getCountryAction(alpha_code));
  }, [dispatch, alpha_code]);

  if (loading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <>
      <Header />
      <Container>
        <div>
          <div>
            <img src={country?.flag} alt="flag-img" />
          </div>
          <div>
            <h1>{country?.name}</h1>
            <h3>{country?.alpha_code}</h3>
            <p>{country?.continent}</p>
            <p>{country?.subregion}</p>
            <p>{country?.population}</p>
            <p>{country?.capital}</p>
            <p>{country?.area}</p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CountryDetail;
