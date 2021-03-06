const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");
//const { Product } = require("./index.js");

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
   
    vehicle_name: {
      type: DataTypes.STRING,
      allowNull:false,
      
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
