
var data = require("../data/friends.js");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
        res.json(data);
    });

    app.post("/survey", function (req, res) {
        var newUser = req.body;
        repeatEach(newUser);
        data.push(newUser);
        res.json(data[bestMatch]);
    });
    var scoreDiff = [];
    var bestMatch;
    function repeatEach(newUser) {
        scoreDiff = [];
        for (j = 0; j < data.length; j++) {
            compare(data[j], newUser)
        }
    }

    function compare(oldUser, newUser) {
        var total = 0;
        var z = [];
        var x = oldUser.scores;
        var y = newUser.scores;
        for (var i = 0; i < 3; i++) {
            z.push(Math.abs(x[i] - y[i]));
            total += z[i];
        }
        scoreDiff.push(total);
        bestMatch = scoreDiff.indexOf(Math.min.apply(null, scoreDiff));
    }
}