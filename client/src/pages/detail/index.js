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

  let area = country.area;
  let population = country.population;
  let nf = Intl.NumberFormat();
  if (area && population) {
    // nf.format(area);
    // population = nf.format(population);
    area = nf.format(area);
    population = String(population).replace(/(.)(?=(\d{3})+$)/g, "$1,");
    // area = String(area).replace(/(.)(?=(\d{3})+$)/g, "$1,");
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
            <p>{population}</p>
            <p>{country?.capital}</p>
            <p>{area} km2</p>
            <ul>
              {country.activities ? (
                country.activities.map((activity) => (
                  <span>
                    <li>{activity.name}</li>
                    <li>{activity.difficulty}</li>
                    <li>{activity.duration}</li>
                    <li>{activity.season}</li>
                  </span>
                ))
              ) : (
                <p>No activities</p>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default CountryDetail;
