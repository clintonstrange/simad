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
    car_status: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    model_code: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    make: { // such as SEDAN,HATCHBACK, TRUCK, 
      type: DataTypes.STRING,
      allowNull: false,
    },

    mileage: { // MUST have milage
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    registration_year: {
      type: DataTypes.STRING,
      allowNull: false,
    },
     date_recieved:{
       type: DataTypes.DATE,
       allowNull:false,
       validate:{
         isDate:true
       }
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
