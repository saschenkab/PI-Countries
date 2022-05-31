const axios = require("axios");
const { Country, Activity } = require("../db");

const apiCountries = async () => {
  // let countries = undefined;

  try {
    let countries = (await axios.get("https://restcountries.com/v3.1/all"))
      .data;

    countries = countries?.map((country) => {
      return {
        alpha_code: country.cca3,
        name: country.name.official,
        capital: country.capital ? country.capital[0] : "Capital not found",
        flag: country.flags.png,
        area: country.area,
        subregion: country.subregion
          ? country.subregion
          : "Subregion not found",
        continent: country.continents[0],
        population: country.population,
      };
    });
    // countries = countries.data;
    countries?.map(async (country) => {
      // console.log(countries);
      await Country.bulkCreate({
        where: {
          name: country.name,
          capital: country.capital,
          population: country.population,
          flag: country.flag,
          // region: country.region,
          subregion: country.subregion,
          // timezones: country.timezones,
          continent: country.continent,
          alpha_code: country.alpha_code,
          area: country.area,
        },
      });
    });

    const results = await Country.findAll({
      attributes: [
        "alpha_code",
        "name",
        "flag",
        "continent",
        "capital",
        "subregion",
      ],
    });
    return results;
  } catch (error) {
    console.log(error);
  }

  // (countries = countries?.map((country) => {
  //   return {
  //     name: country.name.official,
  //     capital: country.capital,
  //     population: country.population,
  //     flag: country.flags.png,
  //     // region: country.region,
  //     subregion: country.subregion
  //       ? country.subregion
  //       : "subregion not found",
  //     //   timezones: country.timezones,
  //     continent: country.continents[0],
  //     alpha_code: country.cca3,
  //     area: country.area,
  //   };
  // }))
};

// const getCountries = async () => {
//   const results = await Country.findAll({
//     attributes: [
//       "alpha_code",
//       "name",
//       "flag",
//       "continent",
//       "capital",
//       "area",
//       "subregion",
//       "population",
//     ],
//     include: Activity,
//   });

//   if (results.length > 0) {
//     return results;
//   } else {
//     return "No countries found";
//   }
// };

module.exports = {
  // getCountries,
  apiCountries,
};

// const getApiCountries = async () => {
//   let countries = [];

//   try {
//     countries = await axios.get("https://restcountries.com/v3.1/all");
//     countries = countries.data;
//     countries = await Promise.all(
//       countries.map(async (country) => {
//         await Country.findOrCreate({
//           where: {
//             name: country.name.official,
//             capital: country.capital ? country.capital[0] : "Capital not found",
//             population: country.population,
//             flag: country.flags.png,
//             subregion: country.subregion
//               ? country.subregion
//               : "Subregion not found",
//             // timezones: country.timezones,
//             continent: country.continents[0],
//             alpha_code: country.cca3,
//             area: country.area,
//           },
//         });
//       })
//     );
//   } catch (error) {
//     console.log(error);
//   }

//   // countries = countries?.map((country) => {
//   //   return {
//   //     name: country.name.official,
//   //     capital: country.capital,
//   //     population: country.population,
//   //     flag: country.flags.png,
//   //     // region: country.region,
//   //     subregion: country.subregion,
//   //     //   timezones: country.timezones,
//   //     continent: country.continents[0],
//   //     code: country.cca3,
//   //     area: country.area,
//   //   };
//   // });
// };

// const getAllCountries = async () => {
//   const results = await Country.findAll({
//     attributes: [
//       "name",
//       "capital",
//       "population",
//       "flag",
//       "subregion",
//       "continent",
//       "alpha_code",
//       "area",
//     ],
//     include: Activity,
//   });
//   return results;
// };

// module.exports = getAllCountries;
