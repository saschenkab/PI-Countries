const axios = require("axios");
const { Country } = require("../db");

const getCountries = async () => {
  let countries = undefined;

  try {
    countries = await axios.get("https://restcountries.com/v3.1/all");
    countries = countries.data;
  } catch (error) {
    console.log(error);
  }

  countries = countries?.map((country) => {
    return {
      name: country.name.official,
      capital: country.capital,
      population: country.population,
      flag: country.flags.png,
      region: country.region,
      //   subregion: country.subregion,
      //   timezones: country.timezones,
      continent: country.continents[0],
      code: country.cca3,
      area: country.area,
    };
  });

  countries.map(async (country) => {
    await Country.findOrCreate({
      where: {
        name: country.name,
        capital: country.capital ? country.capital[0] : "Capital not found",
        population: country.population,
        flag: country.flag,
        region: country.region,
        // subregion: country.subregion,
        // timezones: country.timezones,
        continent: country.continent,
        id: country.code,
        area: country.area,
      },
    });
  });

  const results = await Country.findAll();

  return results;
};

module.exports = getCountries;
