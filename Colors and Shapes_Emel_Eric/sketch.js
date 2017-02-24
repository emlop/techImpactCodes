function setup() {
  // Eric did the driving and I typed
  createCanvas(500, 500);// custom canvas created 
  background('red'); // picked red for the background
  
}

function draw() {
  fill('green'); // filled rect green
  rect(100, 125, 100, 200); // created rectangle
  
  fill('blue'); // filled qua blue
  quad(300, 125, 350, 100, 400, 100, 450, 300); // placed a quad
}