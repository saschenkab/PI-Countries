const { Router } = require("express");
const { Country, Activity } = require("../db");
const activity = Router();

activity.post("/createActivity", async (req, res) => {
  const { name, difficulty, duration, seasons, countries } = req.body;

  try {
    const newActivity = await Activity.create({
      //   id: id++,
      name,
      difficulty,
      duration,
      seasons,
    });

    if (countries) {
      await newActivity.addCountries(countries);
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
    res.status(500).json({ message: error.message });
  }
});

activity.get("/activities", async (req, res) => {
  try {
    const activities = await Activity.findAll({
      include: [
        {
          model: Country,
          as: "countries",
          attributes: ["name"],
        },
      ],
    });

    if (activities) {
      res.status(200).json({ activities });
    } else {
      res.status(400).json({ message: "No activities found" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Error getting activities" });
  }
});

module.exports = activity;
