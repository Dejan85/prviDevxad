const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.get("/", async (req, res) => {
  res.render("index");
});

//create server
app.listen(PORT, () => {
  console.log("Server us up");
});
