var exp = require('express');

module.exports.reo = '<html>\n' +
    '<head>\n' +
    '<meta charset="utf-8"> <meta http-equiv="X-UA-Compatible" content="IE=edge"> <meta name="viewport" content="width=device-width, initial-scale=1"> <!-- CSS --> <link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Roboto:400,100,300,500"> <link rel="stylesheet" href="assets/css/form-elements.css"> <link rel="stylesheet" href="assets/css/style.css"> <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"> <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script> <link rel="stylesheet" href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/themes/smoothness/jquery-ui.css"> <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script> <script type="text/javascript" src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCQ4S0LOhaQh0-WxvsWg5cFPzTuPJt_E3U"></script>\n' +
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

module.exports.otrotd = '<tr><td>';
module.exports.ctdotd = '</td><td>';
module.exports.ctdctr = '</td></tr>';
module.exports.tablehead =     '<nav class="navbar navbar-inverse">\n' +
    '<div class="container"><div class="navbar-header"></div>\n' +
    '<nav class="navbar-collapse collapse">\n' +
    '<ul class="nav navbar-nav ">\n' +
    '<li><a href="index.html"> Home</a></li>\n' +
    '<li><a href="list.html"> List your Work </a></li>\n' +
    '<li><a href="look.html">Help your neighborhood </a></li>\n' +
    '</ul></nav></div></nav>\n' +
 '<table class="table table-striped" border="1"><tr><th>Nr.</th><th>Work Id</th><th>Task Id</th><th>Employeer Id</th><th>Work Description</th><th>Address</th><th>Latitude</th><th>Langitude</th></tr>';
module.exports.tableend = '</table><footer>\n' +
    '\n' +
    '    <div class="footer">\n' +
    '        <div class="container">\n' +
    '            <div class="row">\n' +
    '\n' +
    '\n' +
    '                <div class="footer-border"></div>\n' +
    '                <p>&copy;Volunteer Team\n' +
    '                </p>\n' +
    '            </div>\n' +
    '\n' +
    '        </div>\n' +
    '    </div>\n' +
    '\n' +
    '</footer>';


