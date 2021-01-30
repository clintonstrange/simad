const router = require("express").Router();
const { User } = require("../models");

// get home view
router.get("/", (req, res) => {
  if (req.session.signedIn) {
    res.redirect("/dashboard");
    return;
  }

  res.render("homepage");
});

module.exports = router;
