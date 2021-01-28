const sequelize = require("../config/connection");
const { User } = require("../models");

const userdata = [
  {
    first_name: "Clint",
    last_name: "Strange",
    role: "Director",
    email: "clintonstrange@hotmail.com",
    password: "password123",
  },
  {
    first_name: "Darth",
    last_name: "Vader",
    role: "Manager",
    email: "darth@sith.com",
    password: "password123",
  },
  {
    first_name: "Kylo",
    last_name: "Ren",
    role: "Admin",
    email: "kylo@sith.com",
    password: "password123",
  },
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;
