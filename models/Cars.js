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
    year: {
     type: DataTypes.INTEGER,
     allowNull:false
    },
    make:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlphanumeric:true,
      },
    },model:{
      type: DataTypes.STRING,
      allowNull:false,
      validate:{
        isAlphanumeric:true,
      },
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
