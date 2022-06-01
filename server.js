const express = require("express");
const consign = require("consign");
const path = require("path");
const bodyParser = require("body-parser");
const app = express();
require("dotenv").config();

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

//novas mudanças inseridas
app.set("view engine", "ejs");

consign().include("controllers").into(app);

app.get("/", (req, res) => {
  res.render("index", { key: process.env.KEY });
});

app.get("/todos-items", (req, res) => {
  res.render("index", { key: process.env.KEY });
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
