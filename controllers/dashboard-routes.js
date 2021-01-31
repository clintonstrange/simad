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

router.get("/categories/:id", withAuth, (req, res) => {
  Category.findByPk(req.params.id, {
    attributes: ["id", "category_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "product_name", "price", "stock", "category_id"],
      },
    ],
  })
    .then((dbCategoryData) => {
      if (dbCategoryData) {
        const category = dbCategoryData.get({ plain: true });

        res.render("single-category", {
          category,
          loggedIn: true,
          roleDirector: req.session.roleDirector,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/categories/products/:id", withAuth, (req, res) => {
  Product.findByPk(req.params.id, {
    attributes: ["id", "product_name", "price", "stock"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbProductData) => {
      if (dbProductData) {
        const product = dbProductData.get({ plain: true });

        res.render("single-product", {
          product,
          loggedIn: true,
          roleDirector: req.session.roleDirector,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/categories/edit/:id", withAuth, (req, res) => {
  Category.findByPk(req.params.id, {
    attributes: ["id", "category_name"],
  })
    .then((dbCategoryData) => {
      if (dbCategoryData) {
        const category = dbCategoryData.get({ plain: true });

        res.render("edit-category", {
          category,
          loggedIn: true,
          roleDirector: req.session.roleDirector,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/products/edit/:id", withAuth, (req, res) => {
  Product.findByPk(req.params.id, {
    attributes: ["id", "product_name", "price", "stock"],
    include: [
      {
        model: Category,
        attributes: ["id", "category_name"],
      },
    ],
  })
    .then((dbProductData) => {
      if (dbProductData) {
        const product = dbProductData.get({ plain: true });

        res.render("edit-product", {
          product,
          loggedIn: true,
          roleDirector: req.session.roleDirector,
        });
      } else {
        res.status(404).end();
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

// get dashboard view
router.get("/", (req, res) => {
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

router.get("/add-category", (req, res) => {
  res.render("add-category", {
    loggedIn: req.session.loggedIn,
    roleDirector: req.session.roleDirector,
  });
});

router.get("/add-product", (req, res) => {
  Category.findAll({
    attributes: ["id", "category_name"],
  })
    .then((dbCategoryData) => {
      const categories = dbCategoryData.map((category) =>
        category.get({ plain: true })
      );
      res.render("add-product", {
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

module.exports = router;
