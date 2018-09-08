// include required libs
var path = require("path");
var readChunk = require("read-chunk");
var fileType = require("file-type");
var parser = require("body-parser");

// initialize server
var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);







// start server
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
})

/* file type:

const buffer = readChunk.sync('image', 0, 4100);
fileType(buffer);

*/