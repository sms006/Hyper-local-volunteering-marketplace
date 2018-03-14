var express = require('express');
var getloc = express.Router();

//captures the radius, longitude and latitude from the get request in order to locate nearby locations within the radius
var radi, lati, lngi;
getloc.get('/submitloc', function (req,res) {

    radi = req.query.radius;
    lati = req.query.lat;
    lngi = req.query.lng;

    console.log(radi,lati,lngi);

});

module.exports = {router:getloc, rad:radi, lat:lati, lng:lngi};
