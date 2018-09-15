// include required libs
var path = require("path");
var parser = require("body-parser");
var express = require("express");

// configure, initialize server
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static(path.join(__dirname, "app/public")));
app.use(parser.urlencoded({extended: true}));
app.use(parser.json());

// link server routing data
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app, path);

// start server
app.listen(PORT, function() {
    console.log(`App listening on PORT ${PORT}`);
});