var express = require('express');
var sendpages = express.Router();
var vol = require('../volunteer');
var path = require('path');

sendpages.use(express.static('public'));

sendpages.get('/', function(req, res, next) {
    res.sendFile('./index.html',{root: path.join('S:/Course Mets/sadproj','views')});
});

sendpages.get('/list.html', function(req, res, next) {
    res.sendFile('./list.html',{root: path.join('S:/Course Mets/sadproj','views')});

});

sendpages.get('/look.html', function(req, res, next) {
    res.sendFile('./look.html',{root: path.join('S:/Course Mets/sadproj','views')});

});

module.exports = sendpages;
