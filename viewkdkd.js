const http = require('http');
const mysql = require('mysql');
var reo = require('./views/displaytable-reo');
var methods = {


    abc: function showhtml() {

        const pool = mysql.createPool({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'sad_test1'
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
                        table += reo.otrotd + (i + 1) + reo.ctdotd + res[i].workid + reo.ctdotd + res[i].taskid + reo.ctdotd + res[i].employerid + reo.ctdotd + res[i].work_description + reo.ctdotd + res[i].address + reo.ctdotd + res[i].lat + reo.ctdotd + res[i].lng + reo.ctdctr ;
                    }
                    table = reo.tablehead + table + reo.tableend ;

                    con.release(); //Done with mysql connection

                    return cb(table);
                });
            });
        };

            let sql = 'SELECT * FROM marketplace';
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
// var file = meg.meg;
// var publicConfig = {
//     key: 'AIzaSyA1gnpTMv_3WFP4BzJ28vBLZTbaCkahw7E',
//     stagger_time:       1000, // for elevationPath
//     encode_polylines:   false,
//     secure:             true, // use https
//     proxy:              'http://127.0.0.1:9999' // optional, set a proxy for HTTP requests
// };
// var GoogleMapsAPI = require('googlemaps');
//
// var gmAPI = new GoogleMapsAPI(publicConfig);
// var reverseGeocodeParams = {
//     "latlng":        "51.1245,-0.0523",
//     "result_type":   "postal_code",
//     "language":      "en",
//     "location_type": "APPROXIMATE"
// };
//
// gmAPI.reverseGeocode(reverseGeocodeParams, function(err, result){
//     console.log(result);
// });
exports.data = methods;
