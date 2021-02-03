const router = require("express").Router();
const { User } = require("../../models");

// get all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: { exclude: ["password"] },
  })
    .then((dbUserData) => res.json(dbUserData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((dbUserData) => {
      if (!dbUserData) {
        res.status(404).json({ message: "No user found with this id" });
        return;
      }
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});



router.post("/login", (req, res) => {
  console.log('logging in as çlint',req.body.email);
  User.findOne({
    where: {
      email: req.body.email,
    },
  }).then((dbUserData) => {
    console.log("dbUserDataLog",dbUserData);
    if (!dbUserData) {
      res.status(400).json({ message: "No user with that email address!" });
      return;
    }

    const validPassword = dbUserData.checkPassword(req.body.password);
    console.log(validPassword);
    if (!validPassword) {
      res.status(400).json({ message: "Incorrect password!" });
      return;
    }

    if (dbUserData.role === "Director") {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.loggedIn = true;
        req.session.roleDirector = true;

        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    } else {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.loggedIn = true;
        req.session.roleDirector = false;

        res.json({ user: dbUserData, message: "You are now logged in!" });
      });
    }
  });
});

router.post("/logout", (req, res) => {
  console.log(req.session);
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
    console.log(req.session);
  } else {
    res.status(404).end();
    console.log(req.session);
  }
});

router.post("/", (req, res) => {
  User.create({
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    role: req.body.role,
    email: req.body.email,
    password: req.body.password,
  })
    .then((dbUserData) => {
      res.json(dbUserData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// router.put("/:id", (req, res) => {
//   User.update(req.body, {
//     individualHooks: true,
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

// router.delete("/:id", (req, res) => {
//   User.destroy({
//     where: {
//       id: req.params.id,
//     },
//   })
//     .then((dbUserData) => {
//       if (!dbUserData) {
//         res.status(404).json({ message: "No user found with this id" });
//         return;
//       }
//       res.json(dbUserData);
//     })
//     .catch((err) => {
//       console.log(err);
//       res.status(500).json(err);
//     });
// });

module.exports = router;
