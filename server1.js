
var express = require("express");

var app     = express();

var path    = require("path");

var mysql = require('mysql');

var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

var con = mysql.createConnection({

    host: "localhost",

    user: "root",

    password: "meghna123",

    database: "mydb"

});

app.get('/',function(req,res){

    res.sendFile(path.join(__dirname+'/form.html'));

});

app.post('/submit',function(req,res){


    var name=req.body.name;

    var email=req.body.email;

    var pincode=req.body.pincode;

    res.write('You sent the name "' + req.body.name+'".\n');

    res.write('You sent the email "' + req.body.email+'".\n');

    res.write('You sent the pincode "' + req.body.pincode+'".\n');


    con.connect(function(err) {

        if (err) throw err;

        var sql = "INSERT INTO users (name, email,pincode) VALUES ('"+name+"', '"+email+"','"+pincode+"')";

        con.query(sql, function (err, result) {

            if (err)
            {
                throw err;
            }

            console.log("1 record inserted");

            res.end();
        });
    });
})

app.listen(8080);
