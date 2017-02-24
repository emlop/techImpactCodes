var x = 0;
var yPos = 0; 
function setup() {
  createCanvas(600, 600);
  noLoop();
  frameRate(30)
}
function draw() {
  background(204);
  x = x + 1;
  if (x > width) {
    x = 0;
  }
  fill(100, 200, 255 )
  noStroke();
  ellipse(x, 300, x, 400);

  push();
  noStroke();
  fill('pink');
  ellipse(mouseX, 450, mouseX, 300);
  
  yPos = yPos -1;
  if (yPos < 0) {
    yPos = height;
    ellipse(0, yPos, width, yPos);
  }
}
function mousePressed() {
  loop();
}

