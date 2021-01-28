const { Product } = require("../models");

const productData = [
  {
    product_name: "Product #1",
    price: 101.0,
    stock: 10,
    category_id: 1,
  },
  {
    product_name: "Product #2",
    price: 102.0,
    stock: 20,
    category_id: 2,
  },
  {
    product_name: "Product #3",
    price: 103.0,
    stock: 30,
    category_id: 3,
  },
  {
    product_name: "Product #4",
    price: 104.0,
    stock: 40,
    category_id: 4,
  },
  {
    product_name: "Product #5",
    price: 105.0,
    stock: 50,
    category_id: 5,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
