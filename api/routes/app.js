const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const User = require('../models/User');

app.use(bodyParser.json());

app.get("/", async(_, res) => {
    res.send(readXMLFile());
});

app.post("/", async(req, res) => {
    console.log(req.body);

    await User.create(req.body)
    .then(() => {
        return res.json({
            erro: false,
            mensagem: "Cliente cadastrado com sucesso"
        });
    }).catch(() => {
        return res.status(400).json({
            erro: true,
            mensagem: "Erro: Cliente não cadastrado com sucesso"
        });
    });
});

app.listen(8080, () => {
    console.log("Iniciando na porta 8080: http://localhost:8080");
});