var db = require("../config/database");

exports.all = function (cb) {
    db.get('atividade').find().then(cb);
};

exports.get = function (nome, cb) {
    db.get('atividade').find({"nome": nome}).then(cb);
};