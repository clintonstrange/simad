const router = require("express").Router();
const { Category, Product } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      res.render("dashboard", {
        categories,
        loggedIn: true,
        roleDirector: req.session.roleDirector,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get dashboard view
router.get("/", (req, res) => {
  console.log(req.session);
  res.render("dashboard", {
    loggedIn: req.session.loggedIn,
    roleDirector: req.session.roleDirector,
  });
});

router.get("/add-user", (req, res) => {
  res.render("add-user", {
    loggedIn: req.session.loggedIn,
    roleDirector: req.session.roleDirector,
  });
});

module.exports = router;
