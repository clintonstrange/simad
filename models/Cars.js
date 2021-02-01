const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Vehicle extends Model {}

Vehicle.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
   
    category: {
      type: DataTypes.STRING,
      allowNull:falseA
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Vehicle",
  }
);

module.exports = Vehicle;
