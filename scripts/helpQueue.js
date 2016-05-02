module.exports = function(robot) {

	// // robot.hear() will have the robot listen in on any channel it's in
	// robot.hear(/badger/i, function(response) {
	// 	response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
	// });

	// robot.hear(/i dislike (.+)/i, function(response) {
	// 	var like = response.match[1];
	// 	// response.reply() will have the robot at-mention you when it responds
	// 	response.reply('I also dislike ' + like);
	// });

	// // robot.respond() means the robot will only reply when at-mentioned or DMed
	// robot.respond(/who should i call on today\?/i, function(response) {
	// 	var user = robot.brain.userForName('gordo');
	// 	response.reply('Call on ' + user.real_name + '!');
	// });



// student helpQueue script
	// userName posts "help with [topic]"
	// userName + [topic] gets pushed() to helpQue[ ]

	// if {
	// 	userName  === 'gordo' posts 'help next'
	// 	helpQue[ ] shifts()
	// 	robot.responds( 'help'  + userName +  'with' +  [topic] )
	// } else {
	// 	return helpQue size "there are # of people in the queue"
	// }



	robot.respond(/mentionname is (.+)/i, function(msg) {
		//var mentionname, user;
		var mentionName = msg.match[2];
		//user = robot.brain.userForId(msg.envelope.user.id);
		//return user.mentionname = mentionname;
		response.reply('Call on ' + mentionName + '!');
	});


	// var userForMentionName;

	// userForMentionName = function(name) {
	// 	var k, lowerName, mentionName, result;
	// 	result = null;
	// 	lowerName = name.toLowerCase();
	// 	for (k in robot.brain.data.users || {}) {
	// 		mentionName = robot.brain.data.users[k]['mention_name'];
	// 		if ((mentionName !== null) && mentionName.toLowerCase() === lowerName) {
	// 			result = robot.brain.data.users[k];
	// 		}
	// 	}
	// 	return result;
	// };

};