import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import mapamundi from "../../common/images/mapamundi.png";
import SearchBar from "../searchbar";
import { getCountriesByNameAction } from "../../redux/actions";

import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;

  h2 {
    font-size: 1.5rem;
    font-weight: bold;
    color: #432818;
    text-transform: uppercase;
    text-shadow: 0px 0px 2px rgba(67, 40, 24, 0.6);
  }
`;

const Header = () => {
  const dispatch = useDispatch();

  // const [reRender, setReRender] = useState("");

  const handleChange = () => {
    dispatch(getCountriesByNameAction("", dispatch));
    // setReRender("");
  };

  return (
    <Container>
      <Link to="/home">
        <Container onClick={handleChange}>
          <img src={mapamundi} alt="mapamundi" />
          <h2>Countries</h2>
        </Container>
      </Link>
      <SearchBar />
      <Link to="/createActivity">
        <button>Create Activity</button>
      </Link>
    </Container>
  );
};

export default Header;
