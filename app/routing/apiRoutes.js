//I did take a look at the solution for this page

var friends = require("../data/friends");

module.exports = function (app) {


    app.get("/api/friends", function (req, res) {
    res.json(friends);
  });
    app.post("/api/friends", function (req, res) {
    
    var bestMatch = {
      name: "",
      friendDifference: Infinity
    };
    var userData = req.body;
    var userPoints = userData['points[]'];

    var totalDifference;

    for (var i = 0; i < friends.length; i++) {
      var currentFriend = friends[i];
      totalDifference = 0;

      console.log(currentFriend.name);

      for (var j = 0; j < currentFriend.scores.length; j++) {
        var currentFriendScore = currentFriend.scores[j];
        var currentUserScore = userScores[j];

        totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
      }

      if (totalDifference <= bestFriend.friendDifference) {

        bestFriend.name = currentFriend.name;
        bestFriend.friendDifference = totalDifference;
      }
    }

    friends.push(userData);

    res.json(bestMatch);
  });
};