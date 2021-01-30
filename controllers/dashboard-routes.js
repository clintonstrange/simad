const router = require("express").Router();
const { User, Category, Product } = require("../models");

router.get("/", (req, res) => {
  Category.findAll({
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["product_name"],
      },
    ],
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      res.render("dashboard", {
        categories,
        loggedIn: req.session.loggedIn,
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
