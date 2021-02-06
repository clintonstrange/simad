const User = require("./User");
const Vehicle = require("./Vehicle");
const Product = require("./Product");

// Products belongsTo 1 Vehicle
Product.belongsTo(Vehicle, {
  foreignKey: "vehicle_id",
  onDelete: "cascade",
});

// Vehicles have many Products
Vehicle.hasMany(Product, {
  foreignKey: "vehicle_id",
  onDelete: "cascade",
});

module.exports = { User, Vehicle, Product };
