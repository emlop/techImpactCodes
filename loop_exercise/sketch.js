
// created variables for x and yPos
var x = 0;
var yPos = 0; 
// defined canvas size, noLoop and framerate
function setup() {
  createCanvas(600, 600);
  noLoop();
  frameRate(30)
}
function draw() {
  background(204);
  x = x + 1;
  if (x > width) { // if x which = 0 greater than width +1 and loops on x axis
    x = 0;
  }
  // fill, noStroke ellipse push are all defined here
  fill(100, 200, 255 )
  noStroke();
  ellipse(x, 300, x, 400);

  push();
  noStroke();
  fill('pink');
  ellipse(mouseX, 450, mouseX, 300);
  
  yPos = yPos -1; // if yPos is less than 0, - 1 position
  if (yPos < 0) {
    yPos = height;
    ellipse(0, yPos, width, yPos);
  }
}
function mousePressed() { // when mousePressed pink ellipse moves on the y axis
  loop(); // blue ellipse loops continuously 
}

