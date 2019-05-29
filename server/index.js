var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var cors = require('cors');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, '../client'))); 



app.get('/restaurant/:name', function(req, res) {
    res.header("X-Content-Type", "text/javascript");
    res.sendFile(path.join(__dirname, '/../client/index.html'))
});

app.get('/API/restaurant/:name', function(req, res) {
    res.header("X-Content-Type", "text/javascript");
    var q = req.params.name;
    res.redirect('http://localhost:3003/API/restaurant/'+q)
});


app.listen(3000, function() {
    console.log('listening on port 3000!');
});

