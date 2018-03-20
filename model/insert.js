var express = require('express');
var look = require('../routes/list');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sad_test1'
});

module.exports = {
    putopps: function (nm,em,wd,add,lat,lng,tow) {

        var sql1 = 'insert into employer set ?';
        var sql2 = 'insert into marketplace set ?'

        connection.connect(function(err) {
            if (err) throw err;

            connection.query(sql1, function (err, results) {
                if (err) throw err;

                console.log(results);

            });

            connection.query(sql2, function (err, results) {
                if (err) throw err;

                console.log(results);

            });
        });
    }
};