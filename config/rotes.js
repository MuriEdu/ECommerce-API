const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser");
const db = require("../database");

routes.get("/", (req, res) => {
  res.send("Olá Mundo");
});

routes.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  res
    .status(200)
    .send(`e-mail e senha recebidos com sucesso ${email}, ${password}`);
});

routes.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  res
    .status(200)
    .send({
      message: `Os dados do novo usuário foram recebidos: SEJA BEM VINDO ${name}`,
    });
});

module.exports = routes;
