///////////////////////////////////////////////////////
//Route to survey.html
// $("#submit").click(function(event) {
// 	event.preventDefault();

// 	$.get("/api/friends", function(data) {
// 		// console.log(data);				
// 	var matched;
// 	var friendId;
// 		for(var i = 0; i < data.length; i++) {
// 			// console.log(data[i].scores)
// 		//  ["5", "1", "4", "4", "5", "1", "2", "5", "4", "1"]

// 			if($("#q" + (i+1)).val() == data[i].scores[i]) {
// 			console.log("matched");
// 			friendId = data[i];
// 			// return matched = true;
// 			// if(matched) {
// 					console.log("You matched with: " + friendId.name);
// 				// } 
// 			} else {
// 				console.log("didn't match");
// 				// return matched = false;
// 			}
// 		}	
// 	})
// });

// $("#submit").click(function(event) {
// 	event.preventDefault();
// 	$.get("/api/friends", function(data) {
// 	})
// })

//global array of user data
var userData = [];

function getUserData() {
	userData.push($("#q1").val());
	userData.push($("#q2").val());
	console.log(userData);
}

getUserData();