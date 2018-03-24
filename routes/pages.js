var express = require('express');
var sendpages = express.Router();
var vol = require('../volunteer');
var path = require('path');

sendpages.use('/',express.static(path.join('S:/Course Mets/sadproj/public', 'stylesheets')));

sendpages.get('/', function(req, res, next) {
    console.log(__dirname);
    res.sendFile('./index.html',{root: path.join('S:/Course Mets/sadproj','views')});
});

sendpages.get('/list.html', function(req, res, next) {
    res.sendFile('./list.html',{root: path.join('S:/Course Mets/sadproj','views')});
    res.end();
});

sendpages.get('/look.html', function(req, res, next) {
    res.sendFile('./look.html',{root: path.join('S:/Course Mets/sadproj','views')});
    res.end();
});

module.exports = sendpages;
