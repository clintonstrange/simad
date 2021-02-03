const router = require("express").Router();
const { Vehicle, Product } = require("../../models");

router.get("/", (req, res) => {
  // find all Cars
  Vehicle.findAll({
    include: [
      {
        model: Product,
        attributes: ["id", "make", "year", "model", "vehicle_id"],
      },
    ],
  })
    .then((dbvehicleData) => {
      res.json(dbvehicleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  // find one vehicle by its `id` value
  Vehicle.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: Product,
        attributes: ["id", "year", "model", "make", "vehicle_id"],
      },
    ],
  })
    .then((dbvehicleData) => {
      if (!dbvehicleData) {
        res.status(404).json({ message: "No Vehicle found with this id" });
        return;
      }
      res.json(dbvehicleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.post("/", (req, res) => {
  // create a new vehicle
  Vehicle.create({
    vehicle_name: req.body.vehicle_name,
  })
    .then((dbvehicleData) => res.json(dbvehicleData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put("/:id", (req, res) => {
  // update a vehicle by its `id` value
  Vehicle.update(
    {
      vehicle_name: req.body.vehicle_name,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then((dbvehicleData) => {
      if (!dbvehicleData) {
        res.status(404).json({ message: "No vehicle found with this id" });
        return;
      }
      res.json(dbvehicleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.delete("/:id", (req, res) => {
  // delete a vehicle by its `id` value
  Vehicle.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbvehicleData) => {
      if (!dbvehicleData) {
        res.status(404).json({ message: "No vehicle found with this id" });
        return;
      }
      res.json(dbvehicleData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
