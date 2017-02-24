
// variables created
var ballX = 100;
var ballY = 75;
var speedX = 2;
var speedY = 3;


function setup() {
	createCanvas(600, 400);
}
// background defined
function draw() {
	background(100, 50, 200);
	
	move(); // move function
	restart(); // restart function
	display(); // display function
}

// display function was created. 
function display() {
	stroke(255);
	strokeWeight(4);
	fill(random(255), random(255));
	ellipse(ballX, ballY, 24, 24);
}
// move function created.
function move() {
	ballX = ballX  + speedX;
	ballY = ballY + speedY;

}

function restart() {
	if (ballX > height || ballY > width) { // when ballX surpasses the canvas width OR the ballY surpasses the canvas height
		ballX = 100; // draw ballX at 300
		ballY = 75; // draw ballY at 200
	}
}
