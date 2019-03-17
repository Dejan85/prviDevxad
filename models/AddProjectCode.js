const mongoose = require("mongoose");

const AddProjectCodeSchema = new mongoose.Schema({
  projectName: {
    type: String,
    code: {
      folder: { type: String },
      file: { type: String }
    }
  }
});

module.exports = mongoose.model("ProjectCode", AddProjectCodeSchema);
