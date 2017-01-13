var db = require("../config/database");

exports.all = function (cb) {
    var projeto = db.get('projeto');
    projeto.find().then(cb);
};

exports.get = function (nome, cb) {
    var projeto = db.get('projeto');
    projeto.find({"nome": nome}).then(cb);
};