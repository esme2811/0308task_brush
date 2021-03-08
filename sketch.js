let x=0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  noFill();
  stroke(255,255,255);
  quad(mouseX,mouseY, 400, 400,mouseX,400,400,mouseY);
  
}