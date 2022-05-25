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
        attributes: ["id", "name", "flag", "continent", "capital", "region"],
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

module.exports = countries;
