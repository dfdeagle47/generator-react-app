/*=== Main Application ===*/
'use strict';

var express = require('express'),
    http = require('http'),
    bodyParser = require('body-parser'),
    app = express(),
    http_port = 3000,
    args = process.argv.splice(2);

app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json({
    limit: '10mb'
}));

app.use(bodyParser.urlencoded({
    extend: true
}));

require('./db/db')
    .once('open', function callback() {
        /*=== insert routes here ===*/
        require('./all.routes')(app);
    });

app.listen(args[0] || http_port);
console.log('Listening on ' + http_port);