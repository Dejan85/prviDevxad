const express = require("express");
const router = express.Router();
const passport = require("passport");
const upload = require("../../config/gfs");
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const fs = require("fs");

//
// ─── VALIDATIONS ────────────────────────────────────────────────────────────────
//

const isAdmin = require("../../validations/is-admin");

//
// ─── MODELS ─────────────────────────────────────────────────────────────────────
//

const Project = require("../../models/AddProjects");
const User = require("../../models/User");

//
// ─── GFS ────────────────────────────────────────────────────────────────────────
//

let gfs;

const conn = mongoose.createConnection(
  "mongodb://xad:xad12345@ds145923.mlab.com:45923/devxad"
);

conn.once("open", () => {
  //init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("projects");
});

// @Route POST /admin/add
// @desc  Add project
// access Private
router.post(
  "/add",
  passport.authenticate("jwt", { session: false }),
  upload.array("file"),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => isAdmin(user))
      .then(admin => {
        if (admin) {
          const fileName = req.files.map(item => {
            return item.filename;
          });
          const newProject = new Project({
            title: req.body.title,
            name: req.body.name,
            description: req.body.description,
            category: req.body.category,
            filename: fileName
          });

          newProject.save();
        }
      })
      .catch(err => {
        console.log(err);
      });
    // }
  }
);

// @Route POST /admin/addcode
// @desc  Add project
// access Private

router.post(
  "/addcode",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    User.findById(req.user.id)
      .then(user => isAdmin(user))
      .then(admin => {
        if (admin) {
          console.log(req.body);
        }
      });
  }
);

module.exports = router;
