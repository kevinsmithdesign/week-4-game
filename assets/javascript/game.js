/* Need to create 4 gems in illustrator. Each gem will be worth a certain 
amount of points. The points will be hidden until you click the crystal */

/*  Everytime you click a crystal you get a certain amount of points, 
you want the points to add up to the random number.*/

/* At the start of the game there is a random number generated 
that needs to be posted to the screen. That random 
number needs to change if the player wins or losses the game. 
 */

 /* Random Number needs to be between 19 - 120 */
 /* The crystal random number needs to be between 1 - 12 */

 //Prevents any jQuery codr from running  before the document is finished loading.




$(document).ready(function(){


	//$(".directions").hide();

	//Global Variables
	var wins = 0;
	var losses = 0;
	var currentScore = 0;
	//var audio = new Audio("").play();

	

	//Get a random number between 19 - 120
	var randomNumber = Math.floor((Math.random()* 100) + 19);
	console.log(randomNumber);
	$(".randomnNumber").html(randomNumber);
	/* var firstClick = function() {
			if(red) {
				$(".randomNumber").append();
			}
	} */


	//Crystals + Values between 1 - 12
	var red = Math.floor((Math.random()* 12) + 1);
	var blue = Math.floor((Math.random()* 12) + 1);
	var green =	Math.floor((Math.random()* 12) + 1);
	var purple = Math.floor((Math.random()* 12) + 1);

	//Update classes and Id's
	var updateMath = function () {


		$(".add").empty();
		$(".add").append(currentScore);
		$("#wins").empty();
		$("#wins").append(wins);
		$("#losses").empty();
		$("#losses").append(losses);
		$(".randomNumber").empty();
		$(".randomNumber").append(randomNumber);
	}

	//Restart 
	var restart = function() {
		//Resets Score and Random Number 
		currentScore = 0;
		randomNumber = Math.floor((Math.random()* 100) + 19);


		//Get a random number between 1 -12 for your gems
		var red = Math.floor((Math.random()* 12) + 1);
		var blue = Math.floor((Math.random()* 12) + 1);
		var green =	Math.floor((Math.random()* 12) + 1);
		var purple = Math.floor((Math.random()* 12) + 1);

		//Call Function
		updateMath();
	}

	var logic = function() {

		if(currentScore == randomNumber) {
			wins++;
			$("#three").css("background-color", "#166332")
			.hide(1500, function(){
				$("#three").css("background-color", "#18212a")
				.show(1500);

			});
			//$(this).css("background-color", "#18212a");
			//$(this).dequeue();
			//wins++;
			restart();
		
			//restart();

		} else if (currentScore > randomNumber) {
				losses++;
				$("#four").css("background-color", "#a02928");

				//$(this).effect("background-color", "#18212a", {}, 1000);
				//$(this).css("background-color", "#18212a");
				//$(this).dequeue();
				restart();
		
				//restart();

		} else {
			updateMath();
		}	
	}


	

	//$(".add").append(currentScore);


	//If directions is clicked, change margin height?

	//$(".myclass:hover div").css("background-color","red");


	//Button's once clicked.
	$("#view").on("click", function() {
		$("ol, #goAway").toggle();
		$(".section1").css("margin-top", "-20px");
		$("h1").css("margin-right", "-30px");
		$("#view").css("margin-left", "400px");

	});


	//Red Button once clicked.
	$("#red").on("click",function(){
		currentScore = currentScore + red;

		logic();
	});



	$("#blue").on("click", function() {
		currentScore = currentScore + blue;
		logic();
	});

	//Green Button once clicked. 
	$("#green").on("click", function(){
		currentScore = currentScore + green;
		logic();
	});

	//Blue Button once clicked. 
	$("#purple").on("click", function(){
		currentScore = currentScore + purple;
		logic();
	});


	$("#resetGame").addClass()


	 $("#resetGame").on("click", function(){
		wins = 0;
	 	losses = 0;
	 	currentScore = 0;
	 	//randomNumber = Math.floor((Math.random()* 100) + 19);
		restart(); 
	});


});  

	 /* window.onload = function(){
		$("#resetGame").click;
	} */



/*********	Need to add or fix

////BEFORE SUBMITTING FOR HW
1st - Guess this number doesn't work the first time around. 
2nd - Guess this number doesn't change to a new number 
once it wrong or right and needs to.
3rd - The direction margins don't work if button is toggled or isn't written properly in jQuery. 
3.5 - Reset button isn't working properly.

//Other add ons.
3rd - I want the wins and losses to only light up red or green for 
(5) seconds then go back to the normal color. 
4th - I want to add audio to the game, and click sound event for the dimaonds. 
Also, I want to add a sound for when the player wins the game. 
5th - Add a 2 minute timer. 
6th - Who ever has the heighest score at the end of two minutes get to enter there name. 
7th - Add bonus gem button if player get three in a row correct that gives them an extra 
point in the wins column. 
8th Add a yellow button that says bonus point if the player get three in a row. 
Then go back to wins after 5 seconds. 
9th Add hover ocapity or color or something when hovering over the buttons.

***********/











	






	