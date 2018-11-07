var express = require('express')
var app = express();
var cors = require('cors');
var request = require('request')
// var cron = require('node-cron');
var bodyParser = require("body-parser");
var port = process.env.PORT || 8080;
var admin = require('firebase-admin');
var serviceAccount = require('./asemax226.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://asemax226.firebaseio.com"
});
var db = admin.firestore();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// cron.schedule('*/10 * * * * *', () => {
app.get('/firebase', function(req, res) {
	var url = 'https://api.mlab.com/api/1/databases/home_security/collections/visitors?s={"date": -1}&apiKey=MrfpkboO2errNtfksqJXEHStAEXSX9ah'
	request(url, function (error,response, body) {
	if(error){
		return console.log("Error: ", error)
	}
	var jsonBody = JSON.parse(body);
	var venueList = new Array();
	var testCD = {};
	for (var i = 0; i <1; i++) {
		var docRef = db.collection('notification').doc(jsonBody[i].date);
		venueList[i] = {
			"date": jsonBody[i].date,
			"imageUrl": jsonBody[i].imageBase64,
			"userId": "max",
			"LabelId": "Normal"
		};
		console.log(venueList)
		testCD = {
			"date": jsonBody[i].date,
			"imageUrl": jsonBody[i].imageBase64,
			"userId": "max",
			"LabelId": "Normal"
		};
		// console.log(testCD)
		docRef.set(testCD, {merge: true});
	}
	})
	console.log('running a task every 10 seconds');
});

app.listen(port, function() {
	console.log('app running')
})
