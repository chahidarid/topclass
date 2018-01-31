var express = require('express');
var app = express();
app.use('/', express.static(__dirname + '/src'));
app.get('/product', function (req, res) {
    res.send('product.html')
  });
var port = Number(process.env.PORT || 8080);
app.listen(port, function() { 
    console.log('Your files will be served through this web server')
});