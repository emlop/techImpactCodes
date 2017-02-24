
function setup() {
	createCanvas(600, 480);
}

function draw() {
	background(200);
	noStroke();

	house(200, 240, 100); // calling the first house with arguments
	house(400, 240, 100); // calling the second house with arguments

}

// created function for the "first house" which is the triangle
function house(x1,y1,x2,y2,x3,y3) {
	fill(125, 225, 35);
	triangle(230, 225, 258, 170, 286, 225); // the x,y1,x2,y2,x3,y3 the parameters are defined here
	
function house2(x,y,w,h){ // created function for "2nd house" which is the rect
  
}
	fill(155, 0, 200);
	rect(230, 225, 56, 60); //  the parameters are defined here
}