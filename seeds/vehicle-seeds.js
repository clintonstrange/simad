const { Vehicle } = require("../models");

const vehicleData = [
  {
    vehicle_name: "SUV",
  },
  {
    vehicle_name: "SEDAN",
  },
  {
    vehicle_name: "COUPE",
  },
  {
    vehicle_name: "CONVERTIBLE",
  },
  {
    vehicle_name: "HATCHBACK",
  },
  {
    vehicle_name: "PICKUP",
  },
  {
    vehicle_name: "VAN",
  },
  {
    vehicle_name: "Minivan",
  },
  {
    vehicle_name: "WAGON",
  },
];

const seedCategories = () => Vehicle.bulkCreate(vehicleData);

module.exports = seedCategories;
