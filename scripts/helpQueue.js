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





	robot.respond(/who @?([\w .\-]+)\?*$/i, function(response) {
    var name, user, users;
    name = response.match[1].trim();
    users = robot.brain.usersForFuzzyName(name);
    if (users.length === 1) {
      user = users[0];
      response.send(name + " is user - " + user);
    }
  });



};


//response.message.user.name
