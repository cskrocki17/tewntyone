//twenty one revised
//21 game

var total = 0;
var num = 0;
var playAgain = 0;

alert("The rules: You are only allowed to enter 1, 2, or 3. After you enter a number the computer will enter a number that will add on to the one you guessed. The number will keep adding up until the number equals 21. If you are the person who says the number that makes the total add up to 21 then you lose.");
do{//while playAgain != y
	total= 0;
	do{//while total < 20
		num = prompt("Enter 1, 2, or 3.");
		if(num == 1){
			total = total + 4;
			alert("The computer added 3 the total is now "+total);
		}
		else if(num == 2){
			total = total + 4;
			alert("The computer added 2 the total is now "+total);
		}
		else if(num == 3){
			total = total + 4;
			alert("The computer added 1 the total is now "+total);
		}
		else{
			alert("You did not enter 1, 2, or 3. Please enter one of those numbers.")
		}
	}
	while(total != 20);
	alert("You're only option is 21. Sorry you lost :(");
	playAgain= prompt("Do you want to play again? type 'y' to continue");
}
while(playAgain == "y")
