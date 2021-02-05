const router = require("express").Router();
const { Vehicle, Product } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
  Vehicle.findAll({
    attributes: ["id", "vehicle_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "year", "make", "model", "vehicle_id"],
      },
    ],
  })
    .then((dbvehicleData) => {
      const vehicles = dbvehicleData.map((vehicle) =>
        vehicle.get({ plain: true })
      );
      res.render("dashboard", {
        vehicles,
        loggedIn: true,
        roleDirector: req.session.roleDirector,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/vehicles/:id", withAuth, (req, res) => {
  Vehicle.findByPk(req.params.id, {
    attributes: ["id", "vehicle_name"],
    include: [
      {
        model: Product,
        attributes: ["id", "year", "make", "model", "vehicle_id"],
      },
    ],
  })
    .then((dbvehicleData) => {
      if (dbvehicleData) {
        const vehicle = dbvehicleData.get({ plain: true });
        console.log(vehicle);

        res.render("single-vehicle", {
          vehicle,
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

router.get("/vehicles/products/:id", withAuth, (req, res) => {
  Product.findByPk(req.params.id, {
    attributes: ["id", "year", "make", "model"],
    include: [
      {
        model: Vehicle,
        attributes: ["id", "vehicle_name"],
      },
    ],
  })
    .then((dbProductData) => {
      if (dbProductData) {
        const product = dbProductData.get({ plain: true });
        console.log(product);

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

router.get("/vehicles/edit/:id", withAuth, (req, res) => {
  Vehicle.findByPk(req.params.id, {
    attributes: ["id", "vehicle_name"],
  })
    .then((dbvehicleData) => {
      if (dbvehicleData) {
        const vehicle = dbvehicleData.get({ plain: true });

        res.render("edit-vehicle", {
          vehicle,
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
    attributes: ["id", "make", "model", "year"],
    include: [
      {
        model: Vehicle,
        attributes: ["id", "vehicle_name"],
      },
    ],
  })
    .then((dbProductData) => {
      if (dbProductData) {
        const product = dbProductData.get({ plain: true });
        console.log(product);

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

router.get("/add-vehicle", (req, res) => {
  res.render("add-vehicle", {
    loggedIn: req.session.loggedIn,
    roleDirector: req.session.roleDirector,
  });
});

router.get("/add-product", (req, res) => {
  Vehicle.findAll({
    attributes: ["id", "vehicle_name"],
  })
    .then((dbvehicleData) => {
      const vehicles = dbvehicleData.map((vehicle) =>
        vehicle.get({ plain: true })
      );
      res.render("add-product", {
        vehicles,
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
