const router = require("express").Router();
const passport = require("passport");
const { User, Category, Product } = require("../models");
const initializePassport = require("../utils/passport-auth");

// initializePassport(passport, (email) => {
//   User.findOne({
//     where: {
//       email: email,
//     },
//   });
// });

router.get("/", (req, res) => {
  console.log("======================");
  Category.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "updated_at"],
      },
    ],
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      res.render("dashboard", { categories, loggedIn: true });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
