var circleX = 250; // x position
var e = 88 // red
var me = 111 // green
var l = 222 // blue
var j = 230 // red  for fill
var a = 33 // green for fill
var y = 11 // blue for fill
 
function setup() {
  createCanvas(600, 480);
}
 
function draw() {
  // background
  background(e, me, l);
  // ellipse
  noStroke();
  fill(j, a, y);
  ellipse(circleX, 240, 55, 55);
   
  circleX = circleX + 10; // circle moving 10 pixels to the right
  
  
}
