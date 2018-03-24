var express = require('express');
var getloc = express.Router();
var getopps = require('../model/select');
var reo = require('../views/resptemplate');

//captures the radius, longitude and latitude from the get request in order to locate nearby locations within the radius
getloc.get('/submitloc', function (req, res) {

    var radi = req.query.radius;
    var lati = req.query.lat;
    var lngi = req.query.lng;
    var tow =  req.query.choose;
    var final = '';
    getopps.findopps(radi, lati, lngi,tow, function getresult(tab){
        final = reo.reo.replace('{${table}}', tab);
        res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
        res.write(final, 'utf-8');
        res.end();
    });
    //console.log(getopps.sendhtml());
});

module.exports = getloc;
