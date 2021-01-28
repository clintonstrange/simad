const { Category } = require("../models");

const categoryData = [
  {
    category_name: "Category A",
  },
  {
    category_name: "Category B",
  },
  {
    category_name: "Category C",
  },
  {
    category_name: "Category D",
  },
  {
    category_name: "Category E",
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
