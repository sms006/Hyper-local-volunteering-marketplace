const http = require('http');
const mysql = require('mysql');
var reo = require('./views/displaytable-reo');
var methods = {


    abc: function showhtml() {

        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'voluntary'
        });



        //html string that will be send to browser

 var file = reo.reo;

//designs html table with respect to query
//returns the table
        function setResHtml(sql, cb) {

            pool.getConnection((err, con) => {
                if (err) throw err;

                con.query(sql, (err, res, cols) => {
                    if (err) throw err;
                    var table = ''; //to store html table

                    //create html table with data from res.
                    for (var i = 0; i < res.length; i++) {
                        table += reo.otrotd + (i + 1) + reo.ctdotd + res[i].purpose + reo.ctdotd + res[i].pin + reo.ctdotd + res[i].time + reo.ctdctr ;
                    }
                    table = reo.tablehead + table + reo.tableend ;

                    con.release(); //Done with mysql connection

                    return cb(table);
                });
            });
        };

            let sql = 'SELECT purpose,pin,time FROM request';
            const server = http.createServer((req, res) => {
                setResHtml(sql, resql => {
                    file = file.replace('{${table}}', resql);
                    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
                    res.write(file, 'utf-8');
                    res.end();
                });
            });


            server.listen(8080, () => {
                console.log('Server running at //localhost:8080/');
            });
        }
};
exports.data = methods;


