const router = require("express").Router();
const passport = require("passport");
const { User } = require("../models");
const initializePassport = require("../utils/passport-auth");

initializePassport(passport, (email, id) => {
  User.findOne({
    where: {
      email: email,
      id: id,
    },
  });
});

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    User.create({
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      role: req.body.role,
      email: req.body.email,
      password: hashedPassword,
    });
  } catch {
    res.redirect("/register");
  }
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/",
    failureRedirect: "/login",
    failureFlash: true,
  })
);

module.exports = router;
