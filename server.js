/*
	Social network main server file
*/

var express = require('express')
, 	app = express()
;

appEnv = require('./config/environment');
test = require('./test');

var error = require('./config/init/errorHandler')(app, appEnv);

//app.use(error);
app.get("/", test.main);

app.listen(3000);
console.log("Server listening on port 3000");
