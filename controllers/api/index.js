const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const productRoutes = require("./product-routes");
const userRoutes = require("./user-routes");

router.use("/vehicle", categoryRoutes);
router.use("/make", productRoutes);
router.use("/users", userRoutes);

module.exports = router;
