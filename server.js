var http = require("http"),
		fs = require("fs"),
		express = require("express"),
		logger = require("morgan"),
		serveStatic = require("serve-static")

var port = 8040

var app = express()

app.use(logger(":method :url"))

app.use('/components', serveStatic(__dirname + "/app/components"))
app.use('/css', serveStatic(__dirname + "/app/css"))
app.use('/img', serveStatic(__dirname + "/app/img"))
app.use('/lib', serveStatic(__dirname + "/app/lib"))
app.use('/svg', serveStatic(__dirname + "/app/svg"))

app.get('/*', function(req, res) {
	res.sendFile('/app/index.html', {root: __dirname})
})

http.createServer(app).listen(port)

console.log("localhost:" + port)
