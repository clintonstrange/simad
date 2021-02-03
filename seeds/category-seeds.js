const { Vehicle } = require("../models");

const categoryData = [
  {
    category_name: "SUV",
  },
  {
    category_name: "SEDAN",
  },
  {
    category_name: "COUPE",
  },
  {
    category_name: "CONVERTIBLE",
  },
  {
    category_name: "HATCHBACK",
  },
  {
    category_name: "PICKUP",
  },
  {
    category_name: "VAN",
  },
  {
    category_name: "Minivan",
  },
  {
    
      category_name: "WAGON",
    
  }
];

const seedCategories = () => Vehicle.bulkCreate(categoryData);

module.exports = seedCategories;
