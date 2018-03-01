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

// ===============================================================================
// LOAD DATA
var people = require("../data/friendData");


// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function(app) {
	app.get("/api/friends", function(req, res) {
	  res.json(people);
	});
}