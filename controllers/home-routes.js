const router = require("express").Router();

router.get("/", (req, res) => {
  console.log(req.session);
  res.render("homepage", {
    loggedIn: req.session.loggedIn,
  });
});

// router.get("/add-user", (req, res) => {
//   res.render("add-user", {});
// });

module.exports = router;
