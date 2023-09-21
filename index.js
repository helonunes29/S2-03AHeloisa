var http = require('http');
var dt = require('./123');
var dt1 = require('./456');
var dt2 = require('./789');
var dt3 = require('./lolo');
var dt4 = require('./helo');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("HomePage " + dt.myDateTime() + "<br> <br>" + 
            "medicoPage " + dt1.myDateTime1() + "<br> <br>" + 
            "planosPage " + dt2.myDateTime2() + "<br> <br>" +
            "loginPage "  + dt3.myDateTime3() + "<br> <br>" +
            "registerPage " + dt4.myDateTime4());
  res.end();
}).listen(5017);
