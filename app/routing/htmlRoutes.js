// var data = require(data...)

module.exports = function(app) {
    app.get("/tables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/survey.html"))
    });

    // default to home
    app.get("*", function(req, res) {
        res.sendFile("public/home.html");
    })
}
