var express = require('express');
var router = express.Router();
var Projeto = require("../model/projeto");

router.get('/:nome', function(req, res) {
    Projeto.get(req.params.nome, function(projetos) {
        res.json(projetos);
    })
});

router.get('/', function(req, res) {
    Projeto.all(function(projetos) {
        res.json(projetos);
    });
});

module.exports = router;