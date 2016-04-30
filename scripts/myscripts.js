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



robot.respond(/open the (.*) doors/i, function(response) {
  var doorType;
  doorType = res.match[1];
  if (doorType === "pod bay") {
    return res.reply("I'm afraid I can't let you do that.");
  } else {
    return res.reply("Opening " + doorType + " doors");
  }
});