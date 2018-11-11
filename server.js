const express = require("express");
const app = express();
const path = require("path");

// app.use(express.static("public"));

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//create server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server us up");
});
