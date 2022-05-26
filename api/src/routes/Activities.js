const { Router } = require("express");
const { Country, Activity } = require("../db");
const activity = Router();

activity.post("/createActivity", async (req, res) => {
  const { name, difficulty, duration, season, country } = req.body;

  try {
    const newActivity = await Activity.create({
      //   id: id++,
      name,
      difficulty,
      duration,
      season,
    });

    if (country) {
      await newActivity.addCountries(country);
    }

    if (newActivity) {
      res
        .status(200)
        .json({ message: "Activity added successfully", newActivity });
    } else {
      res
        .status(400)
        .json(console.error(newActivity), { message: "Activity not added" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error creating activity" });
  }
});

module.exports = activity;
