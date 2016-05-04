module.exports = function(robot) {

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

// This will get a list of every username
	var userIds = Object.keys(robot.brain.data.users);
	//var listOfUsernames = userIds.map(function(userId) { return robot.brain.data.users[userId].name });
	var randomRealName = robot.brain.data.users[userIds[Math.floor(Math.random() * userIds.length)]].user.real_name;



	var helpQueue = [];

	robot.hear(/(.+) needs help with (.+)/i, function(response) {
		var user = response.match[1];
		var topic = response.match[2];

		helpQueue.push('Help ' + user + ' with ' + topic);
		response.reply('You have been added to the queue' );
	});

	robot.hear(/help next/i, function(response) {
		var next = helpQueue.shift();
		response.reply(next);
	});


	robot.hear(/Yo!/i, function(response) {
		response.reply( 'Yo ' + randomRealName + '!');
	});

};

