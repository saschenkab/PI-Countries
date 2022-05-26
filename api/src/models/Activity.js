const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("activity", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    difficulty: {
      type: DataTypes.ENUM("1", "2", "3", "4", "5"),
      allowNull: false,
    },

    duration: {
      type: DataTypes.TIME,
      allowNull: false,
    },

    season: {
      type: DataTypes.ENUM("summer", "winter", "fall", "spring", "all seasons"),
      allowNull: false,
    },
  });
};
