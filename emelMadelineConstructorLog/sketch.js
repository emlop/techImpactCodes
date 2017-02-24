//Madeline typng, Emel driving
var sound //create sound variable
function preload() { //define sound variabl
  sound = loadSound("giveUp.mp3") //load sound in preload so no awkward silence
}
 
 
 
var bubbles = []; //create variable bubble
 
function setup() {
  createCanvas(600, 400);
  for (var i = 0; i < 4; i++) { //for statement to create bubbles
    bubbles[i] = new Bubble();
     
  }
 
sound.play() //play sound
}
 
function draw() {
  background(255,   232,    138); //color background
  for (var i = 0; i < bubbles.length; i++) { //bubble place??
    console.log(bubbles[i])
    bubbles[i].move();
    bubbles[i].display();
  }
}
 
function Bubble() {
  this.x = random(0, width); // constructor
  this.y = random(0, height);
 
  this.display = function() {
    stroke(255);
    fill(0,0,255);
    ellipse(this.x, this.y, 100, 100); //bubble size
  }
 
  this.move = function() {
    this.x = this.x + random(-1, 1); //bubble move
    this.y = this.y + random(-1, 1);
 
  }
}