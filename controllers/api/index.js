const router = require("express").Router();
const vehicleRoutes = require("./vehicle-routes");
const productRoutes = require("./product-routes");
const userRoutes = require("./user-routes");

router.use("/vehicles", vehicleRoutes);
router.use("/products", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
