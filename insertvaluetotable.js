var mysql = require('mysql');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var urlencodedParser = bodyParser.urlencoded({ extended: false });

app.post('/form', urlencodedParser, function (req, res) {
    console.log(req.body);
    res.send('welcome, ' + res.body.username)
})
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "voluntary"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO request (purpose, pin, time) VALUES ('Help with shopping', '69676', '60')";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted");
    });
});

server.listen(8080);
