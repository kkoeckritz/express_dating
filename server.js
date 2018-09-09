// include required libs
var path = require("path");
var readChunk = require("read-chunk");
var fileType = require("file-type");
var parser = require("body-parser");

// configure, initialize server
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "app/public")));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

// link server routing data
require("./app/routes/htmlRoutes")(app, path);
require("./app/routes/apiRoutes")(app);

// start server
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})

/* file type:

const buffer = readChunk.sync('image', 0, 4100);
fileType(buffer);

*/