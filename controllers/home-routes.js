const router = require("express").Router();
const { User } = require("../models");

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register", (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role: req.body.role,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.first_name = dbUserData.first_name;
        req.session.loggedIn = true;

        res.render("login");
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
