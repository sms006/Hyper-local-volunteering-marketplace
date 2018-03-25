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
    //this function inserts the parameters sent by the get request into the db
    putopps: function (nm,em,wd,add,lat,lng,tow) {

        connection.connect(function(err) {
            if (err) throw err;
            //Inserting employer data into the employer table
            var sql1 = "insert into employer (name,email) values ("+"'"+nm+"'"+","+"'"+em+"'"+");";

            connection.query(sql1, function (err, results) {
                if (err) throw err;

                console.log(results);

            });
            //Retrieving employer ID from employer table
            var sql3 = "select eid from employer where email="+"'"+em+"'";

            connection.query(sql3, function (err, results) {
                if (err) throw err;

                setrest(results[0].eid)

             });

        var setrest= function(empid) {
            //Inserting volunteering task details into the marketplace table
            var sql2 = "insert into marketplace(taskid,employerid,work_description,address,lat,lng) values " +
                "(" + tow + "," + empid + ",'" + wd + "','" + add + "'," + lat + "," + lng + ");";

            connection.query(sql2, function (err, results) {
                if (err) throw err;

                console.log(results);

            });
        }
        });
    }
};
