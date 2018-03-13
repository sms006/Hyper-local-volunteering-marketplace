function dbtohtml() {
    const http = require('http');

    const mysql = require('mysql');
    const pool = mysql.createPool({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'voluntary'
    });

//html string that will be send to browser
    var reo = '<html>\n' +
        '<head>\n' +
        '<style>\n' +

        'table {\n' +
        '    font-family: arial, sans-serif;\n' +
        '    border-collapse: collapse;\n' +
        '    width: 100%;\n' +
        '}\n' +
        '\n' +
        'td, th {\n' +
        '    border: 1px solid #eeeeee;\n' +
        '    text-align: left;\n' +
        '    padding: 10px;\n' +
        '}\n' +
        '\n' +
        'tr:nth-child(even) {\n' +
        '    background-color: #ddd;\n' +
        '}\n' +
        '</style>\n' +
        '{${table}}\n' +
        '</head>\n' +
        '<body>';

//sets and returns html table with results from sql select
//Receives sql query and callback function to return the table
    function setResHtml(sql, cb) {
        pool.getConnection((err, con) = > {
            if(err) throw err;

        con.query(sql, (err, res, cols) = > {
            if(err) throw err;

        var table = ''; //to store html table

        //create html table with data from res.
        for (var i = 0; i < res.length; i++) {
            table += '<tr><td>' + (i + 1) + '</td><td>' + res[i].purpose + '</td><td>' + res[i].pin + '</td><td>' + res[i].time + '</td></tr>';
        }
        table = '<table class="table table-striped" border="1"><tr><th>Nr.</th><th>Purpose</th><th>Pin</th><th>TIme</th></tr>' + table + '</table>';

        con.release(); //Done with mysql connection

        return cb(table);
    })
        ;
    })
        ;
    }

    let sql = 'SELECT purpose,pin,time FROM request ';

//create the server for browser access
    const server = http.createServer((req, res) = > {
        setResHtml(sql, resql= > {
        reo = reo.replace('{${table}}', resql);
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});
    res.write(reo, 'utf-8');
    res.end();
})
    ;
})
    ;

    server.listen(8080, () = > {
        console.log('Server running at //localhost:8080/');
})
    ;
}