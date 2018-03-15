var express = require('express');
var getloc = express.Router();
var getopps = require('../model/select');

//captures the radius, longitude and latitude from the get request in order to locate nearby locations within the radius
getloc.get('/submitloc', function (req, res) {

    var radi = req.query.radius;
    var lati = req.query.lat;
    var lngi = req.query.lng;

    console.log(radi, lngi, lati);
    getopps.findopps(radi, lati, lngi);
    res.send('check console for results');
});

module.exports = getloc;

