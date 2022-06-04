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
  GET_ACTIVITIES,
} from "../utils/constants";

const initialState = {
  countries: [],
  country: {},
  activities: [],
  countriesFiltered: [],
  loading: false,
  selectedContinent: "All",
  selectedActivity: "All",
};

const rootReducer = (state = initialState, action) => {
  console.log(state.countries);
  switch (action.type) {
    case GET_COUNTRIES:
      return {
        ...state,
        countries: action.payload,
        countriesFiltered: action.payload,
      };

    case GET_COUNTRY_BY_NAME:
      return {
        ...state,
        countriesFiltered: action.payload,
      };

    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    case GET_ACTIVITIES:
      return {
        ...state,
        activities: action.payload,
      };

    case FILTER_BY_ACTIVITY:
      const countries = [...state.countries];
      const filteredActivity = countries.filter((country) =>
        country.activities.find((activity) => activity.name === action.payload)
      );
      console.log(countries);
      console.log(action.payload);
      console.log(filteredActivity);

      return {
        ...state,
        selectedActivity: action.payload,
        countriesFiltered:
          action.payload === "All activities" ? countries : filteredActivity,
      };

    case FILTER_BY_CONTINENT:
      const continents = [...state.countries];
      const filteredContinent = continents.filter((country) =>
        country.continent.includes(action.payload)
      );

      console.log(filteredContinent);

      return {
        ...state,
        selectedContinent: action.payload,
        countriesFiltered:
          action.payload === "All continents" ? continents : filteredContinent,
      };

    case ORDER_BY_POPULATION:
      const population = [...state.countriesFiltered];
      let orderByPopulation = population.sort((a, b) => {
        if (a.population > b.population) {
          if (action.payload === "asc") {
            return -1;
          } else {
            return 1;
          }
        }
        if (a.population < b.population) {
          if (action.payload === "desc") {
            return -1;
          } else {
            return 1;
          }
        }
        return 0;
      });

      return {
        ...state,
        countriesFiltered: orderByPopulation,
      };

    case ORDER:
      const order = [...state.countriesFiltered];

      const countriesOrderedByName = order.sort((a, b) => {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();

        if (nameA < nameB) {
          if (action.payload === "asc") {
            return -1; // a comes before b in the sort order
          } else {
            return 1;
          }
        }

        if (nameA > nameB) {
          if (action.payload === "desc") {
            return -1; // b comes before a in the sort order
          } else {
            return 1;
          }
        }
        return 0;
      });

      return {
        ...state,
        countriesFiltered: countriesOrderedByName,
      };

    default:
      return state;
  }
};

export default rootReducer;
