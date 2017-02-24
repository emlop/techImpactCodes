//Emel typing, Madeline Driving
 
 
var circle = { //create circle object
  diameter: 50 //variable withing object
};
function setup() {
  createCanvas(600, 400);
}
  
function draw() {
  // background
  var r = mouseY //r and g determined by mouse movement, b is random
var g = mouseX
var b = random([1],[255])
  background(r, g, b); //assign variables to background
  // ellipse
  fill(mouseX, mouseY, 100); //the fill of elllipse is determined by mouse position
  ellipse(mouseX, mouseY, circle.diameter, circle.diameter); // ellipse follows mouse
  //circle.diameter object use
    
}