const express = require("express");
const routes = express.Router();

let db = [
  { 1: { Nome: "murilo", Idade: "16" } },
  { 2: { Nome: "ana", Idade: "15" } },
  { 3: { Nome: "duda", Idade: "14" } },
];

routes.get("/", (req, res) => {
  return res.json(db);
});

module.exports = routes;
