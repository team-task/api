var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());

app.use(require('./controller'));

app.listen(3000, function() {
    console.log('Listening on port 3000...')
});