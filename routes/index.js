var express = require('express');
var router = express.Router();

router.use('/atividades', require('../controller/atividades'));

module.exports = router;