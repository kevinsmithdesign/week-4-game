/* Need to create 4 gems in illustrator. Each gem will be worth a certain 
amount of points. The points will be hidden until you click the crystal */

/*  Everytime you click a crystal you get a certain amount of points, 
you want the points to add up to the random number.*/

/* At the start of the game there is a random generated 
number that needs to be posted to the screen. That random 
number needs to change if the player wins or losses the game. 
 */

 /* Random Number needs to be between 19 - 120 */
 /* The crystal random number needs to be between 1 - 12 */

 //Prevents any jQuery codr from running  before the document is finished loading.
$(document).ready(function(){

	//Global Variables
	var wins = 0;
	var losses = 0;
	var currentScore = 0;

	//Get a random number between 19 - 120
	var randomNumber = Math.floor(Math.random()* 100) + 19;

	//Crystals + Values between 1 - 12
	var red = Math.floor(Math.random()* 12) + 1;
	var orange = Math.floor(Math.random()* 12) + 1;
	var green =	Math.floor(Math.random()* 12) + 1;
	var blue = Math.floor(Math.random()* 12) + 1;

	//Add crystals in HTML
	var updateMath = function () {
		$(".add").empty();
		$(".add").append(currentScore);
		$("#wins").empty();
		$("#wins").append(wins);
		$("#losses").empty();
		$("#losses").append(losses);
	}

	//Restart 
	var restart = function() {
		//Resets Score and Random Number 
		currentScore = 0;
		randomNumber = Math.floor(Math.random()* 100) + 19;

		//Resets Wins and losses
		$(".randomNumber").empty();
		$(".randomNumber").append(randomNumber);

		//Resets Gems Points
		var red = Math.floor(Math.random()* 12) + 1;
		var orange = Math.floor(Math.random()* 12) + 1;
		var green =	Math.floor(Math.random()* 12) + 1;
		var blue = Math.floor(Math.random()* 12) + 1;

		//Call Function
		updateMath();
	}

	var logic = function() {

		if(currentScore == randomNumber) {
			wins++
			restart();

		} else if(currentScore > randomNumber) {
				losses++
			restart();
		} else {
			updateMath();
		}	
	}

	$(".points").append(randomNumber);

	$(".add").append(currentScore);

	//Red Button once clicked.
	$("#red").on("click",function(){
		currentScore = currentScore + red;
		logic();
	});

	//Orange Button once clicked.
	$("#blue").on("click", function() {
		currentScore = currentScore + orange;
		logic();
	});

	//Green Button once clicked. 
	$("#green").on("click", function(){
		currentScore = currentScore + green;
		logic();
	});

	//Blue Button once clicked. 
	$("#purple").on("click", function(){
		currentScore = currentScore + blue;
		logic();
	});

});









	






	