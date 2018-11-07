var express = require('express')
var app = express();
var cors = require('cors');
var request = require('request')
var bodyParser = require("body-parser");
var port = process.env.PORT || 8081;
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/firebase', function(req, res) {
	var date = new Date().toISOString()
	var url = 'https://api.mlab.com/api/1/databases/home_security/collections/visitors?s={"date": 1}&apiKey=MrfpkboO2errNtfksqJXEHStAEXSX9ah'
	request(url, function (error,response, body) {
		var jsonBody = JSON.parse(body);
		var newJson= { 
			date: date, 
			imageBase64: jsonBody[18].imageBase64 } // 14-28
		request({
			url: url,
			method: "POST",
			json: true,
			body: newJson
		}, function (error, response, body){
			console.log("added one")
		});
	});
});

app.listen(port, function() {
	console.log('app running new')
})