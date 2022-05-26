const { Router } = require("express");
const axios = require("axios");
const { Country, Activity } = require("../db");
const { Op } = require("sequelize");
const getCountries = require("../Controller/index");

const countries = Router();

countries.get("/", async (req, res) => {
  const { name } = req.query;

  if (name) {
    try {
      const countriesByName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: "%" + name + "%",
          },
        },
        attributes: [
          "alpha_code",
          "name",
          "flag",
          "continent",
          "capital",
          "subregion",
        ],
        include: { model: Activity },
      });

      if (countriesByName.length > 0) {
        return res.json(countriesByName);
      } else {
        return res.status(404).json({ message: "Country not found" });
      }
    } catch (error) {
      console.log(error);
      return res.json({ error: "The country does not exist" });
    }
  }
  const countries = await getCountries();
  return res.json(countries);
});

countries.get("/country/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const country = await Country.findByPk(id.toUpperCase(), {
      attributes: [
        "alpha_code",
        "name",
        "flag",
        "continent",
        "capital",
        "subregion",
      ],
      include: { model: Activity },
    });
    if (country) {
      return res.send(country);
    } else {
      return res.status(404).json({ message: "Country not found" });
    }
  } catch (error) {
    console.log(error);
    return res.json({ error: "The country does not exist" });
  }
});

module.exports = countries;
