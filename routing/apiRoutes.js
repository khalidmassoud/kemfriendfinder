var path = require("path");
var friends = require("../data/friends");

module.exports = function(app) {
// Basic route that sends the user first to the AJAX Page
  app.get("/api/friends", function(req, res) {
    res.json(friends);    
  });

// Basic route that sends the user first to the AJAX Page
app.post("/api/friends", function(req, res) {
   
  var goodMatch = {
    name: "",
    photo: "",
    friendDiff: Infinity
    
  };


//logic for matching.
//get the user input so you can match
app.post("/api/survey", function(req, res) {
  var userInfo = req.body;
  console.log(userInfo);  
  
});

  var userData = req.body;
  var userScores = userData.scores;

  var totalDiff = 0;
   
  console.log(userData);

  for (var i = 0; i < friends.length; i++) {
  
    var friendAvailable = friends[i];
    console.log("1 loop");
    console.log("Avaliable Friend" + friendAvailable.name)

    totalDiff = 0;
    console.log("--------------------");

  for (var j = 0; j < friendAvailable.scores.length; j++){
    var NewfriendAvailable =  friendAvailable.scores[j]
    console.log("New Friend Available = " + NewfriendAvailable);
    var userScores = userData.scores[j];
    console.log("UserScore = " + userScores);
    totalDiff += Math.abs(parseInt(userScores) - parseInt(NewfriendAvailable));
    console.log("totalDiff =  " + totalDiff);
    //totalDiff = totalDiff + calculateDiff;
    // console.log("2 loop");
    // console.log("friend score - " + NewfriendAvailable) ;
    // console.log("user score - " + userScores);
    // console.log("total Diff value - " + totalDiff );
    // console.log ("---------");
 
  }
     if (totalDiff <= goodMatch.friendDiff) {
      // Reset the bestMatch to be the new friend.
      console.log("checking to see difference");
      goodMatch.name = friendAvailable.name;
      goodMatch.photo = friendAvailable.photo;
      goodMatch.score = friendAvailable.score;
      goodMatch.friendDiff = totalDiff;
      console.log("GoodMatch Name - " + goodMatch.name);
      console.log("GoodMatch Name - " + goodMatch.score);
      console.log("GoodMatch.friendDiff - " + goodMatch.friendDiff);
      console.log("total Diff - " + totalDiff);
      console.log ("---------");
    }
  
  }
    friends.push(userData);

    
    res.json(goodMatch);
  
});

};