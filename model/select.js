var express = require('express');
var look = require('../routes/look');
var mysql = require('mysql');
var reo = require('../views/resptemplate');

// connect to the MySQL db on localhost
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sad_test1'
});

var table = ''; //to store the html response
module.exports = {

    //This function catches the search parameters given by the user namely the radius, latitude and longitude
    findopps: function (rad,lat,lng,tow,callback) {

        //This sql query looks for entries in the table which are within the radius by using a haversine formula
           var sql = 'SELECT name,email,work_description, address, ( 3959 * acos( cos( radians('+lat+') ) ' +
           '* cos( radians( lat ) ) * cos( radians( lng ) - radians('+lng+') ) + sin( radians('+lat+') ) ' +
           '* sin( radians( lat ) ) ) ) AS distance ' +
           'FROM marketplace ' +
           'JOIN employer on employer.eid = marketplace.employerid ' +
           'where marketplace.taskid = '+tow+
           ' HAVING distance < '+rad +
           ' ORDER BY distance';

            //connecting to the db
            connection.connect(function(err) {
                if (err) throw err;
            });

            //executing the sql query
            connection.query(sql, function (err, res) {
                if (err) throw err;
                //create html table with data from sql results.
                for (var i = 0; i < res.length; i++) {
                    table += reo.otrotd + (i + 1) + reo.ctdotd + res[i].name + reo.ctdotd + res[i].email
                        + reo.ctdotd + res[i].work_description + reo.ctdotd + res[i].address + reo.ctdctr;
                }
                table = reo.tablehead + table + reo.tableend;
                return callback(table);
            });
    }

};
