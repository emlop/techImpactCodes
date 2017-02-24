//Emel drove, Madeline typed

var r = 100 //variable for color stroke
var g = 160
var b = 201

function setup() {
  createCanvas(600, 400); // canvas size
}

function draw() {
  background(55, 99, 126); 
  stroke(r, g, b);
  strokeWeight(8);
  //fill(255);
  if (mouseY > 301){  // if greater greater than 301, display message
  textSize(25);  // size of text 
  text("Wrong Way!", 50, 300); // position of text
  fill(0, 102, 153); // color of text
}
    else if (mouseY > 250) { // if greater than 250, display shape
    ellipse(300, 200, 100, 100);
  } else if (mouseY > 150) { // if greater than 150, display shape
    rect(300, 200, 100, 100);
  } else if (mouseY > 50) { // if greater than, display shape
    line(0, 0, width, height);
  } else { // display shape
    point(300, 200);
  }
}