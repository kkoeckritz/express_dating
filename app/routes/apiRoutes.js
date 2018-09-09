// link user data
var friends = require("../data/friends");

module.exports = function(app) {
    
    // grab friend data via GET
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // compare survey answers with others via POST
    app.post("/api/friends", function(req, res) {
        res.json(friends);
    });
};