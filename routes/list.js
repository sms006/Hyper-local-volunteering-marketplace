var express = require('express');
var getemp = express.Router();
var putopps = require('../model/insert');

getemp.get('/setopportunity', function (req, res) {

    var name = req.query.radius;
    var email = req.query.lat;
    var workd = req.query.lng;
    var address = req.query.radius;
    var lati = req.query.lat;
    var lngi = req.query.lng;
    var typeofwork = req.query.tow;

    console.log();
    putopps.putopps(name,email,workd,address,lati,lngi,typeofwork);

});

module.exports = getemp;