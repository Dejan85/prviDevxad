const express = require("express");
const router = express.Router();
const gravatar = require("gravatar");
const passport = require("passport");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const keys = require("../config/keys").secretOrKey;

//input validation
const validateRegisterInput = require("../validations/register");
const validateLoginInput = require("../validations/login");

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
      errors.email = "Email alredy exist";
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

// @Route POST /users/login
// @desc  Login User / Returning JWT Token (JSON WEB TOKEN)
// access Public
router.post("/login", async (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  //find user buy email
  User.findOne({ email: req.body.email }).then(user => {
    //chack for user
    if (!user) {
      errors.email = "User not found";
      return res.status(404).json(errors);
    }

    //chack for password
    bcrypt.compare(req.body.password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          name: user.firstname,
          avatar: user.avatar
        }; //Create JWT Payload

        //Sign Token
        jwt.sign(payload, keys, { expiresIn: 3600 }, (err, token) => {
          res.json({
            success: true,
            token: "Bearer " + token
          });
        });
      } else {
        errors.password = "Password is incorrect";
        return res.status(400).json(errors);
      }
    });
  });
});

// @Route GET api/users/current
// @desc  Return current user
// access private
router.get(
  "/current",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.json({
      id: req.user.id,
      name: req.user.name,
      email: req.user.email
    });
  }
);

module.exports = router;
