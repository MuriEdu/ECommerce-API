const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser");
const db = require("../database");
const newUser = require("../Models/userSchema");

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

  try {
    newUser.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(200).send({ message: "Novo usuário salvo com sucesso!" });
  } catch (err) {
    res
      .status(400)
      .send({ error: `OCORREU UM ERRO AO SALVAR O NOVO USUÁRIO: ${err}` });
  }
});

module.exports = routes;
