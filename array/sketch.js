
// list of array 
var nums = [100, 55, 88, 125]; // an array with 4 items, index 0-3
var num = 100; // a variable

function setup() {
	createCanvas(400, 400);
}

function draw() {
	background(155, 135, 23);
	ellipse(100, 200, num, num); // width and height are drawn at the variable num
	ellipse(200, 200, nums[3], nums[3]); //width and height 
	ellipse(300, 300, nums[2], nums[2]); //width and height 
}
