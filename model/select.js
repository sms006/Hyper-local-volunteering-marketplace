var express = require('express');
var look = require('../routes/look');
var mysql = require('mysql');


// connect to the MySQL db on localhost
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sad_test1'
});


module.exports = {
    //This function catches the search parameters given by the user namely the radius, latitude and longitude
    findopps: function (rad,lat,lng) {

        //This sql query looks for entries in the table which are within the radius by using a haversine formula
       var sql = 'SELECT name,email,work_description, address, ( 3959 * acos( cos( radians(49.4054581) ) ' +
           '* cos( radians( lat ) ) * cos( radians( lng ) - radians(8.6907999) ) + sin( radians(49.4054581) ) ' +
           '* sin( radians( lat ) ) ) ) AS distance FROM marketplace JOIN employer on ' +
           'employer.eid = marketplace.employerid HAVING distance < 3 ORDER BY distance';

        //connecting to the db
        connection.connect(function(err) {
            if (err) throw err;

            //executing the sql query
            connection.query(sql, function (err, results) {
                if (err) throw err;

                console.log(results);

            });
        });
    }
};
