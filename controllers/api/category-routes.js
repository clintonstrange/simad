const router = require("express").Router();
const { Vehicle, Product } = require("../../models");

router.get("/", (req, res) => {
    // find all Cars
    Vehicle.findAll({
      include: [
        {
          model: Product,
          attributes: ["id", "make", "year", "model"],
        },
      ],
    })
      .then((dbCategoryData) => {
      const vehicleList=dbCategoryData.map(db=>db.get({plain:true}));
      console.log(vehicleList);
      res.render('homepage',vehicleList);
     // console.log(res.json(dbCategoryData))
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.get("/:id", (req, res) => {
    // find one category by its `id` value
    Vehicle.findOne({
      where: {
        id: req.params.id,
      },
      include: [
        {
          model: Product,
          attributes: ["id", "year", "model", "make"],
        },
      ],
    })
      .then((dbCategoryData) => {
        if (!dbCategoryData) {
          res.status(404).json({ message: "No Vehicle found with this id" });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.post("/", (req, res) => {
    // create a new category
    Vehicle.create({
      category_name: req.body.category_name,
    })
      .then((dbCategoryData) => res.json(dbCategoryData))
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.put("/:id", (req, res) => {
    // update a category by its `id` value
    Vehicle.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: { id: req.params.id },
      }
    )
      .then((dbCategoryData) => {
        if (!dbCategoryData) {
          res.status(404).json({ message: "No Category found with this id" });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  router.delete("/:id", (req, res) => {
    // delete a category by its `id` value
  Vehicle.destroy({
      where: {
        id: req.params.id,
      },
    })
      .then((dbCategoryData) => {
        if (!dbCategoryData) {
          res.status(404).json({ message: "No Category found with this id" });
          return;
        }
        res.json(dbCategoryData);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  });

  module.exports = router;