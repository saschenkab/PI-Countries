import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cards from "../../components/cards";
import { getCountriesAction } from "../../redux/actions/index";
import styled from "styled-components";

const Body = styled.div`
  background: #ffe6a7;
`;

const Home = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);

  useEffect(() => {
    dispatch(getCountriesAction());
  }, [dispatch]);

  return (
    <Body>
      <Cards countries={countries} />
    </Body>
  );
};

export default Home;
