// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static("friendFinder"));

// Reservations (DATA)
// =============================================================
var people = [
{
  "name": "Ahmed",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAq7AAAAJDAwYzI4NTQ4LWYwZWUtNGFkYS1hNTYwLTZjYzkwY2ViZDA3OA.jpg",
  "scores": [
  "5",
  "1",
  "4",
  "4",
  "5",
  "1",
  "2",
  "5",
  "4",
  "1"
  ]
},
{
  "name": "Jacob Deming",
  "photo": "https://pbs.twimg.com/profile_images/691785039043022849/oWsy8LNR.jpg",
  "scores": [
  "4",
  "2",
  "5",
  "1",
  "3",
  "2",
  "2",
  "1",
  "3",
  "2"
  ]
},
{
  "name": "Jeremiah Scanlon",
  "photo": "https://avatars2.githubusercontent.com/u/8504998?v=3&s=460",
  "scores": [
  "5",
  "2",
  "2",
  "2",
  "4",
  "1",
  "3",
  "2",
  "5",
  "5"
  ]
},
{
  "name": "Louis T. Delia",
  "photo": "https://pbs.twimg.com/profile_images/639214960049000449/lNCRC-ub.jpg",
  "scores": [
  "3",
  "3",
  "4",
  "2",
  "2",
  "1",
  "3",
  "2",
  "2",
  "3"
  ]
},
{
  "name": "Lou Ritter",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAkDAAAAJDhhZTI5NTk2LWQzZjUtNDJjZi1hMTM2LTQ3ZjNmYjE0YmY2NA.jpg",
  "scores": [
  "4",
  "3",
  "4",
  "1",
  "5",
  "2",
  "5",
  "3",
  "1",
  "4"
  ]
},
{
  "name": "Jordan Biason",
  "photo": "https://media.licdn.com/mpr/mpr/shrinknp_400_400/AAEAAQAAAAAAAAisAAAAJGUxYzc4YzA0LWQxMzUtNGI4NS04YTFiLTkwYzM0YTZkNzA2NA.jpg",
  "scores": [
  "4",
  "4",
  "2",
  "3",
  "2",
  "2",
  "3",
  "2",
  "4",
  "5"
  ]
},
{
  "name": "Bob Miller",
  "photo": "https://www.pexels.com/search/cat/",
  "scores": [
  "2",
  "2",
  "2",
  "2",
  "2",
  "2",
  "2",
  "2",
  "2",
  "2"
  ]
},
{
  "name": "Dindu Nuffin",
  "photo": "https://encyclopediadramatica.rs/DINDUNUFFIN#/media/File:Dindunuffins.jpg",
  "scores": [
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1",
  "1"
  ]
},
{
  "name": "boiu",
  "photo": "https://www.google.com/search?hl=en&tbm=isch&source=hp&biw=1536&bih=759&ei=gnCVWtSAJ8HwsQWx4KyYCQ&q=foower&oq=foower&gs_l=img.3..0i10k1l10.1958.3542.0.3902.8.8.0.0.0.0.51.284.6.6.0....0...1ac.1.64.img..2.6.284.0..0j35i39k1.0.Vr1nlm3oZCU#imgrc=6yNKKABgeF3YNM:",
  "scores": [
  "2",
  "3",
  "3",
  "3",
  "4",
  "2",
  "2",
  "2",
  "2",
  "2"
  ]
},
{
  "name": "Carl Jacks",
  "photo": "https://en.wikipedia.org/wiki/Jack_Palance",
  "scores": [
  "3",
  "3",
  "5",
  "5",
  "2",
  "1",
  "3",
  "3",
  "3",
  "3"
  ]
}
];

// Routes
// =============================================================

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/api/friends"), function(req, res) {
  res.JSON(req.body);
}

// APIs - provides JSON
// ============================================================
// app.get("/api/tables", function(req, res) {
//     var firstFive= [];
//     for (var i = 0; i < 5; i++) {
//       firstFive.push(reservations[i].uniqueID) 
//     }
//     return res.json(firstFive);
// });

// // Takes In JSON 
// app.post("/api/new", function(req, res) {
//   var newReservation = req.body;
//   console.log(newReservation);
//   reservations.push(newReservation);
//   res.json(newReservation);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});