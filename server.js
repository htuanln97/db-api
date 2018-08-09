'use strict';

 var port = process.env.PORT || 8000; // first change

 var http = require('http');
 var express = require('express');
 var tediousExpress = require('express4-tedious');
 var bodyParser = require('body-parser');

 var app = express();
 const index = require('./routes/index');
 require('dotenv').config();

 var server = http.createServer(app);

// Create connection to database
var config = 
   {
     'userName': process.env.USERNAME_DB, 
     'password': process.env.PASSWORD, 
     'server': process.env.SERVER, 
     'options': 
        {
           'database': process.env.DB, 
           'encrypt': true
        }
   }

//  var connection = new Connection(config);

 app.use(function (req, res, next) {
    req.sql = tediousExpress(config);
    console.log("<<< Connected to sql");
    next();
});

 app.use(bodyParser.json());
 app.use('/api', index);


 server.listen(port, function () {
     console.log("server starting on " + port);
 });