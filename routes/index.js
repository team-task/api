var express = require('express');
var router = express.Router();

router.use('/atividades', require('../controller/atividades'));
router.use('/projetos', require('../controller/projetos'));

module.exports = router;