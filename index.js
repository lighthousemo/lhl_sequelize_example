var express = require("express");
var app = express();
var config = require("./config");

app.set("view engine", "ejs"); // default is /views folder

app.get("/", (req, res) => {
  // render the views/index.ejs file
  res.render("index", {greeting: "Hello there!"})
});

// start server
app.listen(config.port, () => {
  console.log(`Example app listening on port ${config.port}!`);
});
