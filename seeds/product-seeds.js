const { Product } = require("../models");

const productData = [
  {
    make: "Acura",
    model: "TL",
    year: 2002 ,
    vehicle_id: 1,
  },
  {
    make: "Acura",
    model: "NSX",
    year: 2001,
    vehicle_id: 2,
  },
  {
    make: "Acura",
    model: "MDX",
    year: 2001,
    vehicle_id: 3,
  },
  {
    make: "Acura",
    model: "RL",
    year: 2000,
    vehicle_id: 4,
  },
  {
    make: "Acura",
    model: "SLX",
    year: 1998,
    vehicle_id: 5,
  },{
    make: "Acura",
    model: "NSX",
    year: 2001,
    vehicle_id: 6,
  },
  {
    make: "Acura",
    model: "MDX",
    year: 2001,
    vehicle_id: 7,
  },
  {
    make: "Acura",
    model: "RL",
    year: 2000,
    vehicle_id: 8,
  },
  {
    make: "Mazda",
    model: "SLX",
    year: 1998,
    vehicle_id: 9,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
