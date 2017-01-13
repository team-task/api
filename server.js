var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());

app.use('/', require('./routes/index'));

app.listen(12000, function() {
    console.log('Listening on port 12000...');
});