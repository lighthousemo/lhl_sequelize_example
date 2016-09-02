var express = require("express");
var app = express();
var config = require("./config");

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  // render the views/index.ejs file
  res.render("index", {greeting: "Hello there!"})
});

app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}!`);
});
