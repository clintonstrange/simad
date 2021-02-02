const User = require("./user");
const Vehicle= require("./Cars");
const Product = require("./product");

// Products belongsTo Category
Product.belongsTo(Vehicle, {
  foreignKey: "id",
});

// // Categories have many Products
 Vehicle.hasOne(Product, {
  foreignKey: "id",
  
 });

module.exports = { User, Vehicle, Product };
