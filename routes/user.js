const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const keys = require("../config/keys").secretOrKey;

//input validation
const validateRegisterInput = require("../validations/register");

//Models
const User = require("../models/User");

// @Route POST /user/register
// @desc  Register user
// access Public
router.post("/register", async (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      erros.email = "Email alredy exist";
      return res.status(400).json(erros);
    } else {
      const avatar = gravatar.url(req.body.email, {
        s: "200", //size,
        r: "pg", //rating
        d: "mm" //default
      });

      const newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => res.json(user))
            .catch(err => {
              console.log(err);
            });
        });
      });
    }
  });
});

module.exports = router;
