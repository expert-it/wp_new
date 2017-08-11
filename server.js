var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser());

app.get("/", function(req, res) {
	console.log(req.query.site);
	var site = req.query.site;
	var exec = require('child_process').exec;
	
	exec("node node_modules/wappalyzer/index.js " + site, function(err, stdout, stderr) {
		console.log(err);
		console.log(stdout);
		return res.status(200).end(stdout);
	})

})

app.listen(8081);