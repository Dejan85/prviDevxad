const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const passport = require("passport");

//connect to db
const db = require("./models/dbConnect");
db();

// passport middleware
app.use(passport.initialize());
// passport config
require("./config/passport")(passport);

//body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//Get routes
const user = require("./routes/user");

//Use routes
app.use("/user", user);

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
