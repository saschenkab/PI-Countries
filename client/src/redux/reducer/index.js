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

const initialState = {
  countries: [],
  country: {},
  activities: [],
  countriesFiltered: [],
  loading: false,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFiltered: action.payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
