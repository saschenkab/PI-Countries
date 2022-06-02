import axios from "axios";
import {
  GET_COUNTRIES,
  GET_COUNTRY,
  GET_COUNTRY_BY_NAME,
  CREATE_ACTIVITY,
  SET_LOADING,
  CLEAN,
  FILTER_BY_CONTINENT,
  FILTER_BY_ACTIVITY,
  ORDER,
  ORDER_BY_POPULATION,
} from "../utils/constants";
import {
  getCountries,
  getCountry,
  getCountryByName,
  createActivity,
} from "../utils/endpoints";

export const getCountriesAction = () => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  const response = await axios.get(getCountries);

  // console.log(response.data);

  dispatch({
    type: GET_COUNTRIES,
    payload: response.data,
  });

  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};

export const getCountriesByNameAction = (payload) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  const response = await axios.get(`${getCountryByName}${payload}`);

  console.log(response.data);

  dispatch({
    type: GET_COUNTRY_BY_NAME,
    payload: response.data,
  });

  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};

export const getCountryAction = (payload) => async (dispatch) => {
  dispatch({
    type: SET_LOADING,
    payload: true,
  });

  console.log(payload);
  const response = await axios.get(
    `http://localhost:3001/countries/country/${payload}`
  );

  console.log(response.data);

  dispatch({
    type: GET_COUNTRY,
    payload: response.data,
  });

  dispatch({
    type: SET_LOADING,
    payload: false,
  });
};
