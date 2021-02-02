const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Product extends Model {}

Product.init(
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
      
    },model:{
      type: DataTypes.STRING,
      allowNull:false,
      
     category_id: {
      type: DataTypes.INTEGER,
       reference:{
         model:'Vehicle',
         key:"id"
       }
     
      }
    },
   
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "Product",
  }
);

module.exports = Product;
