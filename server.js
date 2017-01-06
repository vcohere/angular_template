var http = require("http");
var fs = require("fs");
var express = require("express");
var logger = require("morgan");
var serveStatic = require("serve-static");

var port = 8040;

var app = express();

app.use(logger(":method :url"));
app.use(serveStatic(__dirname + "/app"));

http.createServer(app).listen(port);

console.log("localhost:" + port);
