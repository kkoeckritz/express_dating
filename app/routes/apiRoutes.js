// link required libs
var fs = require("fs");

// link user data
var friends = require("../data/friends");

// define object for importing friends
class Friend {
    constructor(name, photo, scores) {
        this.name = name;
        this.photo = photo;
        this.scores = scores;
    }
}

module.exports = function(app) {
    
    // grab friend data via GET
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // compare survey answers with others via POST
    app.post("/api/match", function(req, res) {

        // create new friend from POST data
        var user = {
            name: req.body.a_name,
            photo: req.body.a_pic,
            scores: [
                req.body.a1,
                req.body.a2,
                req.body.a3,
                req.body.a4,
                req.body.a5,
                req.body.a6,
                req.body.a7,
                req.body.a8,
                req.body.a9,
                req.body.a10
            ]
        };

        // load friends into object
        var all_friends = [];
        for (f of friends) {
            var cur_friend = new Friend(f.name, f.photo, f.scores);
            all_friends.push(cur_friend);
        }

        // 
        var temp_friend = new Friend("No match found.", null, []);
        var diff = 2000;

        // create matching score for each friend
        for (f of all_friends) {
            var this_diff = 0;
            for (a in f.scores) {
                this_diff += Math.abs(parseInt(f.scores[a]) - parseInt(user.scores[a]));
            }

            // replace temp_friend w/ any lower-scoring friend
            if (this_diff < diff) {
                temp_friend = f;
                diff = this_diff;
            }
        }

        // save user data to friends.js
        // DOESN'T WORK: fs.appendFile("../data.friends.js", JSON.stringify(user), "utf-8");

        // present user with closest-matched friend
        console.log(`User matched with ${temp_friend.name}`);
        res.json({
            name: temp_friend.name,
            photo: temp_friend.photo
        });
    });
};