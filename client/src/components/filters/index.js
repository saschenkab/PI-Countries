import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountriesAction,
  getActivitiesAction,
  filterByContinentAction,
  filterByActivityAction,
} from "../../redux/actions";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-flow: column;
  // justify-content: center;
  // align-items: center;
  width: 20%;
  height: 100%;
`;

const FilterContinent = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin: 15px 0;
  text-transform: capitalize;
  position: relative;
  color: black;
  font-weight: ${(props) => (props.active ? 700 : 500)};
  cursor: pointer;

  &::before {
    content: "";
    width: 5px;
    height: 100%;
    background-color: ${(props) => (props.active ? "#432818" : "transparent")};
    position: absolute;
    left: -20px;
    border-radius: 15px;
  }
`;

const Span = styled.span`
  // dispaly: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  font-size: 1.5rem;
  text-align: left;
  font-weight: 700;
  color: #432818;
`;

const Continents = styled.div`
  display: flex;
  flex-direction: column;
`;

const Filters = () => {
  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countries);
  const activities = useSelector((state) => state.activities);
  const selectedContinent = useSelector((state) => state.selectedContinent);
  const selectedActivity = useSelector((state) => state.selectedActivity);

  useEffect(() => {
    dispatch(getCountriesAction());
    dispatch(getActivitiesAction());
  }, [dispatch]);

  const handleSelectedContinent = (continent) => {
    dispatch(filterByContinentAction(continent));
  };

  const handleSelectedActivity = (activity) => {
    dispatch(filterByActivityAction(activity));
  };

  const continents = countries.map((country) => country.continent);
  console.log(continents);
  const filterContinent = continents.reduce((acc, continent) => {
    if (!acc.includes(continent)) {
      acc.push(continent);
    }
    return acc;
  }, []);
  console.log(handleSelectedActivity);
  console.log(filterByActivityAction);
  return (
    <Container>
      <FilterContinent>
        <Item
          active={selectedActivity === "All activities"}
          onClick={() => handleSelectedActivity("All activities")}
        >
          <Span>All Activities</Span>
        </Item>
        {activities.activities &&
          activities.activities.map((activity) => (
            <Item
              key={activity.id}
              active={selectedActivity === activity.name}
              onClick={() => handleSelectedActivity(activity.name)}
            >
              <Span>{activity.name}</Span>
            </Item>
          ))}
      </FilterContinent>
      <FilterContinent>
        <Item
          active={selectedContinent === "All continents"}
          onClick={() => handleSelectedContinent("All continents")}
        >
          <Span>All Continents</Span>
        </Item>
        {filterContinent.map((continent) => (
          <Item
            key={continent}
            active={selectedContinent === continent}
            onClick={() => handleSelectedContinent(continent)}
          >
            <Continents>
              <Span>{continent}</Span>
            </Continents>
          </Item>
        ))}
      </FilterContinent>
    </Container>
  );
};

export default Filters;
