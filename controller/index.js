var express = require('express')
    , router = express.Router()
    , Atividade = require('../model/atividade');

router.use('/atividades', require('./atividades'));



module.exports = router;