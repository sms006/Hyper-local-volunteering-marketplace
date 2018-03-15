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
       var sql = 'SELECT id, name, address, lat, lng, ( 3959 * acos( cos( radians('+lat+') ) * cos( radians( lat ) )' +
          ' * cos( radians( lng ) - radians('+lng+') ) + sin( radians('+lat+') ) * sin( radians( lat ) ) ) )' +
        ' AS distance FROM markers HAVING distance < ' + rad + ' ORDER BY distance LIMIT 0 , 20';

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
