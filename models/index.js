const User = require("./user");
const Category = require("./category");
const Product = require("./product");

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: "category_id",
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: "category_id",
  onDelete: "SET NULL",
});

module.exports = { User, Category, Product };
