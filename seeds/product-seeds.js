const { Product } = require("../models");

const productData = [
  {
    make: "Acura",
    model: "TL",
    year: 2002 ,
    category_id: 1,
  },
  {
    make: "Acura",
    model: "NSX",
    year: 2001,
    category_id: 2,
  },
  {
    make: "Acura",
    model: "MDX",
    year: 2001,
    category_id: 3,
  },
  {
    make: "Acura",
    model: "RL",
    year: 2000,
    category_id: 4,
  },
  {
    make: "Acura",
    model: "SLX",
    year: 1998,
    category_id: 5,
  },{
    make: "Acura",
    model: "NSX",
    year: 2001,
    category_id: 6,
  },
  {
    make: "Acura",
    model: "MDX",
    year: 2001,
    category_id: 7,
  },
  {
    make: "Acura",
    model: "RL",
    year: 2000,
    category_id: 8,
  },
  {
    make: "Mazda",
    model: "SLX",
    year: 1998,
    category_id: 9,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
