const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Grid = require("gridfs-stream");
const dateFormat = require("dateformat");
const now = new Date();
const fs = require("fs");

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

//
// ─── MODELS ─────────────────────────────────────────────────────────────────────
//

const Projects = require("../models/AddProjects");

// @Route GET /projects
// @desc  GET project
// access Public
router.get("/", (req, res) => {
  Projects.find({}).then(project => {
    return res.json(project);
  });
});

// @Route GET /projects/:filename
// @desc  GET file
// access Public
router.get("/:filename", async (req, res) => {
  gfs.files.findOne({ filename: req.params.filename }, (err, file) => {
    const readstream = gfs.createReadStream(file);
    readstream.pipe(res);
  });
});

module.exports = router;
