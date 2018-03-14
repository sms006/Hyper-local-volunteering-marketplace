var exp = require('express');
var mysql = require('mysql');
var db = exp.Router();


var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sad_test1'
});

module.exports = {connection: connection};
