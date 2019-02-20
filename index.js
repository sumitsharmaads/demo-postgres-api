var express = require('express');
const app = express();
var db = require('./queries');

var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var allowCrossDomain = function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
  	res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  	res.header('Access-Control-Allow-Headers', 'DNT,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Range');
    res.header('Access-Control-Max-Age', 1728000);
   	res.header('Content-Type', 'text/plain; charset=utf-8');
    res.header('Content-Length', 0);
      
    if ('OPTIONS' == req.method) {
     	res.send(200);
    }
    else {
    	next();
  	}
	};

  app.use(allowCrossDomain);  
  app.disable('etag');


app.get('/api/puppies', db.getAllPuppies);
app.post('/api/puppies', db.createPuppy);


app.listen(5000, function (){
	console.log("Example app listening");
})