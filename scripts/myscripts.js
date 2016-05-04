module.exports = function(robot) {

	robot.hear(/i dislike (.+)/i, function(response) {
		var like = response.match[1];
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I also dislike ' + like);
	});


	// hubot greeting.
	// (hi|hello) - say hi to your butler

	robot.respond(/hi|hello/i, function(response) {
		var user = robot.brain.userForName('jasonearly');
		response.reply('Howdy ' + user.real_name + '!');
	});


//request a food item reply options
	robot.respond(/order me a (.*)/i, function(response) {
		var foodType;
		foodType = response.match[1];

		if (foodType === 'malort') {
			response.reply('As your friend, I\'m not going to do that for you.');

		} else {
			response.reply('I\'m just a simple bot. You\'ll have to order that ' + foodType + ' yourself.');
		}
	});



//listen for keyword (malort) and reply
	var malortReaction = [
		'Did you say Malort?? We must never speak of this',
		'Here\'s a fun game. Order a shot of Malort for your visiting friends. See if they speak to you ever again.',
		'Fun fact: Malort was sold as \'medicinal alcohol\' during prohibition.',
		'Malort, what soap washes its mouth out with.',
		'Did you know, Malort is NOT actually flavored with gasoline?'
	];

	robot.hear(/malort/i, function(msg) {
		msg.send(msg.random(malortReaction));
	});



	//listen for keyword and reply with reaction gif
	var reactions = [
		'http://giphy.com/gifs/l3L7OwIVLGIG4ThuM/html5',
		'http://giphy.com/gifs/xT1XGHkP7hqm0JvWrS/html5',
		'http://giphy.com/gifs/l3L7Yujvb5gC7MjFm/html5',
		'http://giphy.com/gifs/zujkOi1kkLRzG/html5',
		'http://giphy.com/gifs/6nuiJjOOQBBn2/html5',
		'http://giphy.com/gifs/gpXfKa9xLAR56/html5'
	];

	robot.hear(/celebrate|party|yay|boom/i, function(msg) {
		msg.send(msg.random(reactions));
	});



// This will get a list of every username
	var userIds = Object.keys(robot.brain.data.users);
	//var listOfUsernames = userIds.map(function(userId) { return robot.brain.data.users[userId].name });
	var randomRealName = robot.brain.data.users[userIds[Math.floor(Math.random() * userIds.length)]].user.real_name;


	//sends a random 'Yo!' to users in the channel
	robot.hear(/Yo!/i, function(response) {
		response.send( 'Yo ' + randomRealName + '!');
	});


};