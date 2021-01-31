const { Model, Datatypes } = require("sequelize");
const { authenticate } = require("../config/connection");
const sequelize = require("../config/connection");

class manufacturer extends  {}

manufacturer.init(
  {
   

    manufacturer_abvName: {
      type: Datatypes.STRING,
      allowNull: false,
      primaryKey:true,
      
    },
    Model_Name: {
      type: Datatypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "manufacturer",
  }
);
