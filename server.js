const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.static("public"));

//create server
app.listen(PORT, () => {
  console.log("Server us up");
});
