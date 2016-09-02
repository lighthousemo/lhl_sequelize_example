var express = require("express");
var app = express();
var config = require("./config");
var db = require("./models/index");

app.set("view engine", "ejs"); // default is /views folder

app.get("/", (req, res) => {
  db.User.findAll()
  .then((users) => {
    res.render("index", {users})
    // line above is the same as
    // res.render("index", {users: users})
  });
});

// Create a user with an email address that starts with NAME
// GET /test_create/NAME
app.get("/test_create/:name", (req, res) => {
  db.User.create({email: `${req.params.name || "bob"}@gmail.com`})
  .then((user) => {
    res.redirect("/");
  })
  .catch((err) => {
    res.send("There was an error: " + err);
  })
});

// start server
app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}!`);
});
