// link user data
var friends = require("../data/friends");

var obj1 = {
    name: "dan",
    gender: "male",
    listy: [
        2,
        4,
        1,
        5
    ]
};

module.exports = function(app) {
    
    // grab friend data via GET
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // compare survey answers with others via POST
    app.post("/api/friends", function(req, res) {
        // TODO: COMPATIBILITY LOGIC
    });
};