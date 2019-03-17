const crypto = require("crypto");
const multer = require("multer");
const GridFsStorage = require("multer-gridfs-storage");
const Grid = require("gridfs-stream");
const mongoose = require("mongoose");
// const keys = require("../config/keys");
const path = require("path");

//Create mongo connection
const conn = mongoose.createConnection(
  "mongodb://xad:xad12345@ds145923.mlab.com:45923/devxad"
);

//init gfs
let gfs;

conn.once("open", () => {
  //init stream
  gfs = Grid(conn.db, mongoose.mongo);
  gfs.collection("projects");
});

//
// ─── CREATE STORAGE ENGINE ──────────────────────────────────────────────────────
//

const storage = new GridFsStorage({
  url: "mongodb://xad:xad12345@ds145923.mlab.com:45923/devxad",
  file: (req, file) => {
    return new Promise((resolve, reject) => {
      crypto.randomBytes(16, (err, buf) => {
        if (err) {
          return reject(err);
        }
        const filename = buf.toString("hex") + path.extname(file.originalname);
        const fileInfo = {
          filename: filename,
          bucketName: "projects"
        };
        resolve(fileInfo);
      });
    });
  }
});
module.exports = upload = multer({ storage });
