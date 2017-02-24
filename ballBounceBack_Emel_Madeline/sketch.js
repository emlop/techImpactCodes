// Emel Drove, Madeline typed

// variables created 
var x = 0;  
var speed = 5; 
var r = 75
var b = 125
var g = 225
var c = 230
var oo = 33
var l = 11

function setup() {
  createCanvas(600, 480); // canvas created
}
 
function draw() {
  background(r, b, g); // backkground color
  stroke(125);
  strokeWeight(2);
  fill(c, oo, l);
  ellipse(x, 240, 50, 50); // ellipse position

   
  if (x > width) { // if statement where x greater than width - 5 speed
    speed = - 5;
  }
   if (x < 0) { // if statement where x less than 0 plus speed
     speed =  + 5 //x is zero and decreased by speed which 5

   }
 x = x + speed; // x is zero and increased by speed which 5

}
