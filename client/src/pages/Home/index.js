import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards";
import Header from "../../components/headerBar";
import { getCountriesAction } from "../../redux/actions/index";
import styled from "styled-components";

const Body = styled.div`
  display: flex;
  flex-flow: row;
  oadding: 40px;
`;

const Countries = styled.div`
  width: 80%;
`;

const Filters = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Body>
        <Filters>
          <h2>Filters</h2>
          <p>
            <input type="checkbox" />
            <label>All</label>
          </p>
        </Filters>
        <Countries>
          <Cards countries={countries} />
        </Countries>
      </Body>
    </>
  );
};

export default Home;
