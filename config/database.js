var monk = require('monk');
var db = monk("mongodb://ttapi:ttapi@ds145395.mlab.com:45395/tt");
module.exports = db;