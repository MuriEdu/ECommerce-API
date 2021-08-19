const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser");
const db = require("../database");
const modelUser = require("../Models/userSchema");

routes.get("/", (req, res) => {
  res.send("Olá Mundo");
});

routes.post("/login", (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  let pass = null;

  const getUser = modelUser.find({ email: email }, (err, docs) => {
    pass = docs[0].password;
    if (pass == password) {
      res.status(200).send(docs[0]);
    } else {
      res.status(404).send({ error: "Senha Incorreta" });
    }
  });
});

routes.post("/register", (req, res) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;

  try {
    modelUser.create({
      name: name,
      email: email,
      password: password,
    });
    res.status(200).send({ message: "Novo usuário salvo com sucesso" });
  } catch (err) {
    res
      .status(400)
      .send({ error: `OCORREU UM ERRO AO SALVAR O NOVO USUÁRIO: ${err}` });
  }
});

module.exports = routes;
