var http = require('http');
var util = require('util');
var url = require('url');
var fs = require('fs');

const express = require('express');
const app = express();
var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'sad_test1'
});

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }

    console.log('connected as id ' + connection.threadId);
});
//------------------------------------------------------------------


var server = http.createServer(function (req,res){
    // parse the URL
    var url_parts = url.parse(req.url,true);

    // functions to serve static files
    function sendHTML(filepath) {
        // read the file asynchronously
        fs.readFile(filepath,function(error,contents){
            // once the file is loaded, this function runs
            console.log('Serving the html ' + filepath);
            res.end(contents); // end the request and send the file
        });
    }
    function sendCSS(filepath) {
        // once the file is loaded, this function runs
        fs.readFile(filepath,function(error,contents){
            console.log('Serving the css ' + filepath);
            res.end(contents); // end the request and send the file
        });
    }

    // serve the index page from a static file
    if( url_parts.pathname == '/' ) {
        sendHTML('./form.html');
    }
    // serve the CSS page from a static file
    else if ( url_parts.pathname == '/view.css') {
        sendCSS('./view.css')
    }
    // generate a dynamic page
    else if ( url_parts.pathname == '/submit' ) {

        var sql = 'SELECT work_description, pincode FROM marketplace';
        var query = connection.query(sql, function(err, results) {
            if(err) throw err;
            console.log(results);
            var wd = results[0].work_description;
            var pincode = results[0].pincode;
            //res.send(results);
            var html = '<html><body>';
            html += "<h2>Query received</h2>";
            html += "work description:" + wd;
            html += '<br />';
            html += "pincode: " + pincode;
            html += '<br />';



            html += '</body></html>'; // end the minimal html structure

            res.end(html); // end the request and send the response HTML

        });


/*
       // app.get('/postwork', function(req, res) {
            var post = {name:url_parts.query.name,email:url_parts.query.email};
            var sql = 'INSERT INTO `employer` SET ?';
            var query = connection.query(sql, post, function(err, result) {
                if(err) throw err;
                console.log(result);
               // res.send('Employer Registered');
            });

        var post2 = {work_description:url_parts.query.element_3,pincode:url_parts.query.element_6};
        var sql2 = 'INSERT INTO `marketplace` SET ?';
        var query1 = connection.query(sql2, post2, function(err, result) {
            if(err) throw err;
            console.log(result);
            // res.send('Employer Registered');
        });

       // });
        //var post2 = {}; */

    }
    // if the url was not recognized, 404
    else {
        res.writeHead(404) // put a header for not found
        res.end("<h1>404 - Path not recognized</h1>"); // print the page and end the request
    }
});


//------------------------------------------------------------------
/*
app.get('/getwork', function(req, res){
    var sql = 'SELECT * FROM types_of_work where tid = ';
    var query = connection.query(sql, function(err, results) {
    if(err) throw err;
    console.log(results);
res.send(results);
});
});
*/
server.listen('3000', function() {
    console.log('Server started on port 3000');
});