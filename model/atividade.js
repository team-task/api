var db = require("../config/database");

exports.all = function (cb) {
    var atividade = db.get('atividade');
    atividade.find().then(cb);
};

exports.get = function (nome, cb) {
    var atividade = db.get('atividade');
    atividade.find({"nome": nome}).then(cb);
};