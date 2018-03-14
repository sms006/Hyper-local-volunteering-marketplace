var express = require('express');
var router = express.Router();
var mysql = require('mysql');

var look = require('../routes/look');
var connect = require('../model/connect');

var sql = 'SELECT id, name, address, lat, lng, ( 3959 * acos( cos( radians('+ look.lat + ') ) * cos( radians( lat ) )' +
    ' * cos( radians( lng ) - radians('+look.lng+') ) + sin( radians('+look.lat+') ) * sin( radians( lat ) ) ) ) ' +
    'AS distance FROM markers HAVING distance < '+look.rad+' ORDER BY distance LIMIT 0 , 20';

var query = connect.connection.query(sql, function (err, results) {

    if (err) throw err;
    console.log(results);

});
