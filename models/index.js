const User = require("./user");
const Vehicle= require("./Cars");
const Product = require("./product");

// Products belongsTo Category
Product.belongsTo(Vehicle, {
  foreignKey: "category_id",
  onDelete:"cascade"
});

// // Categories have many Products
 Vehicle.hasOne(Product, {
  foreignKey: "category_id",
  onDelete:"cascade"
 });

module.exports = { User, Vehicle, Product };
