var express = require('express');
var getemp = express.Router();
var putopps = require('../model/insert');

getemp.get('/setopportunity', function (req, res) {

    var name = req.query.name;
    var email = req.query.email;
    var workd = req.query.task;
    var address = req.query.address;
    var lati = req.query.lat;
    var lngi = req.query.lng;
    var typeofwork = req.query.choose;
    putopps.putopps(name,email,workd,address,lati,lngi,typeofwork);

});

module.exports = getemp;
