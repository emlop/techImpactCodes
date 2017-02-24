function setup() {
  createCanvas(640, 440);
  background('red');
  console.log('Emel');
  
}

function draw() {
  fill('aqua'); // selected aqua as the color for ellipse
  strokeWeight(10);// change the border of the ellipse 
  ellipse(160, 120, 155,155) // sizing ellipse
  
  fill('purple'); // selected aqua as the color for triangle
  strokeWeight(5); // changed the border of the triangle 
  triangle( 30, 75, 58, 20, 86, 75); // sizing triangle
  
  
  
}