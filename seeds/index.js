const seedVehicles = require("./vehicle-seeds");
const seedProducts = require("./product-seeds");
const seedUsers = require("./user-seeds");
//const seedTags = require('./tag-seeds');
//const seedProductTags = require('./product-tag-seeds');

const sequelize = require("../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- DATABASE SYNCED -----\n");
  await seedVehicles();
  console.log("\n----- VEHICLES SEEDED -----\n");

  await seedProducts();
  console.log("\n----- PRODUCTS SEEDED -----\n");

  await seedUsers();
  console.log("\n----- Seed Users -----\n");
  //   await seedTags();
  //   console.log('\n----- TAGS SEEDED -----\n');

  //   await seedProductTags();
  //   console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
