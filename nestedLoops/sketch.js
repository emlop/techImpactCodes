function setup() {
  createCanvas(600, 400);  // create canvas
}
 // background, strokeWeight, stroke all defined here
function draw() {
  background(220); 
  strokeWeight(4); 
  stroke(0);
 // var x = 0 to start at point zero
  for (var x = 0; x <= width; x += 50) { // when mouse moved rect move downward
    for (var y = 0; y <= mouseY; y += 50) { //  
    fill(random(150), 0, random(100)); // random color output
    rect(x, y, 50, 50); // rectangle
    }
  }
   
 
   
}
