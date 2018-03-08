var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "voluntary"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM request WHERE time <= 100", function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});