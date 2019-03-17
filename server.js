const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
// const gravatar = require("gravatar");
// const bcrypt = require("bcryptjs");
const passport = require("passport");

//
// ─── MIDDLEWARE ─────────────────────────────────────────────────────────────────
//

//connect to db
const db = require("./models/dbConnect");
db();

// passport middleware
app.use(passport.initialize());
// passport config
require("./config/passport")(passport);

//body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//
// ─── ROUTES ─────────────────────────────────────────────────────────────────────
//

//User routes
const user = require("./routes/user");
app.use("/user", user);

//Admin routes
const add = require("./routes/admin/add");
app.use("/admin", add);

//Projects routes
const projects = require("./routes/projects");
app.use("/projects", projects);

//
// ─── CONNECT REACT AND NODE ─────────────────────────────────────────────────────
//

// Serve static files from the React frontend app
app.use(express.static(path.join(__dirname, "client/build")));
// Anything that doesn't match the above, send back index.html
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

//
// ─── SERVER RUN ─────────────────────────────────────────────────────────────────
//

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Server us up");
});
