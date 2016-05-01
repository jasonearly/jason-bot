module.exports = function(robot) {

	// robot.hear() will have the robot listen in on any channel it's in
	robot.hear(/badger/i, function(response) {
		response.send("Badgers? BADGERS? WE DON'T NEED NO STINKIN BADGERS");
	});

	robot.hear(/i dislike (.+)/i, function(response) {
		var like = response.match[1];
		// response.reply() will have the robot at-mention you when it responds
		response.reply('I also dislike ' + like);
	});

	// robot.respond() means the robot will only reply when at-mentioned or DMed
	robot.respond(/who should i call on today\?/i, function(response) {
		var user = robot.brain.userForName('gordo');
		response.reply('Call on ' + user.real_name + '!');
	});






	// hubot greeting.
	// (hi|hello) - say hi to your butler

	//var class = ['allisonschaffer','angelarivera','aroemig','gordo','lizsdregas','jasonearly','amatras35','geoff','gregscannell','jen','kistler','ksella','mpatel12']

	robot.respond(/hi|hello/i, function(response) {
		var user = robot.brain.userForName('jasonearly');
		response.reply('Howdy ' + user.real_name + '!');
	});


//request a sandwich reply with location to nearby shop
	robot.respond(/open the (.*) doors/i, function(response) {
		var doorType;
		doorType = response.match[1];
		if (doorType === 'pod bay') {
			return response.reply("I'm afraid I can't let you do that.");
		} else {
			return response.reply('Opening ' + doorType + ' doors');
		}
	});



//listen for keyword and reply with user name
	var malortReaction = ["Did you say malort?? We must never speak of this"];
	robot.hear(/malort/i, function(msg) {
		return msg.send(msg.random(malortReaction));
	});




	//listen for keyword and reply with reaction gif
	var reactions;

	reactions = [
	"http://img.skitch.com/20100714-d6q52xajfh4cimxr3888yb77ru.jpg",
	"https://img.skitch.com/20111026-r2wsngtu4jftwxmsytdke6arwd.png",
	"http://cl.ly/1i0s1r3t2s2G3P1N3t3M/Screen_Shot_2011-10-27_at_9.36.45_AM.png",
	"http://shipitsquirrel.github.com/images/squirrel.png"
	];

	return robot.hear(/ship it/i, function(msg) {
	return msg.send(msg.random(reactions));
	});



};