const express = require("express");
const routes = express.Router();
const bodyParser = require("body-parser").json;
const db = require("../database");
const modelUser = require("../Models/userSchema");

routes.post("/login", (req, res) => {
  const email = req.body.email || false;
  const password = req.body.password || false;

  const getUser = modelUser.find({ email: email }, (err, docs) => {
    if (docs.length == 0) {
      res.status(404).send({ message: "Erro ao fazer login" });
      return;
    }

    if (docs[0].password == password) {
      res.status(200).send(docs);
    } else {
      res.status(404).send({ message: "Erro ao fazer login" });
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

routes.post("/add-address", (req, res) => {
  const id = req.body._id;
  const addressReq = req.body.addressReq;

  try {
    modelUser.findOne({ _id: id }, (err, docs) => {
      docs.address = addressReq;
      docs.save(() => {
        res.status(200).send(docs);
      });
    });
  } catch (err) {
    res.status(400).send({ error: "erro ao adicionar enderço" });
  }
});

module.exports = routes;
