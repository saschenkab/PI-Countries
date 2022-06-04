import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards";
import Header from "../../components/headerBar";
import {
  getActivitiesAction,
  getCountriesAction,
} from "../../redux/actions/index";
import styled from "styled-components";
import Filters from "../../components/filters";
import { getActivities } from "../../redux/utils/endpoints";
import Order from "../../components/order";

const Body = styled.div`
  display: flex;
  flex-flow: row;
  oadding: 40px;
`;

const Countries = styled.div`
  width: 80%;
`;

const Home = () => {
  const dispatch = useDispatch();
  const countriesFiltered = useSelector((state) => state.countriesFiltered);

  useEffect(() => {
    dispatch(getCountriesAction());
    dispatch(getActivitiesAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Order />
      <Body>
        <Filters>
          <h2>Filters</h2>
          <p>
            <input type="checkbox" />
            <label>All</label>
          </p>
        </Filters>
        <Countries>
          <Cards countries={countriesFiltered} />
        </Countries>
      </Body>
    </>
  );
};

export default Home;
