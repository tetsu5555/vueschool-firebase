var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var url = "public" + req.url;
    if (fs.existsSync(url)) {
        fs.readFile(url, (err, data) => {
            if (!err) {
                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(data);
            }
        });
    }
});

var port = process.env.PORT || 3001
server.listen(port, function () {
    console.log("To view your app, open this link in your browser: http://localhost:" + port);
});