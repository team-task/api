var express = require('express');
var router = express.Router();
var Atividade = require("../model/atividade");

router.get('/:nome', function(req, res) {
    Atividade.get(req.params.nome, function(atividades) {
        res.json(atividades);
    })
});

router.get('/', function(req, res) {
    Atividade.all(function(atividades) {
        res.json(atividades);
    });
});

module.exports = router;