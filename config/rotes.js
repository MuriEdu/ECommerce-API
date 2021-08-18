const express = require("express");
const routes = express.Router();
const db = require("../database");

routes.get("/", (req, res) => {
  return res.json(db);
});

module.exports = routes;
