const mongoose = require("mongoose");

const addProjectScheema = new mongoose.Schema({
  title: {
    type: String
  },
  name: {
    type: String
  },
  description: {
    type: String
  },
  category: {
    type: String
  },
  filename: [],

  date: { type: Date, default: Date.now }
});

module.exports = addProjectModel = mongoose.model("Project", addProjectScheema);
