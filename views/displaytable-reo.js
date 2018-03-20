var exp = require('express');

module.exports.reo = '<html>\n' +
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

module.exports.otrotd = '<tr><td>';
module.exports.ctdotd = '</td><td>';
module.exports.ctdctr = '</td></tr>';
module.exports.tablehead = '<table class="table table-striped" border="1"><tr><th>Nr.</th><th>Purpose</th><th>Pin</th><th>TIme</th></tr>';
module.exports.tableend = '</table>';