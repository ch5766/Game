var value = 0;
var x, y;
var bg

function setup() {
  createCanvas(640, 480);
  bg = loadImage("bg.png");
  
  noFill();
  x = 25;
  y = 25;
}

function draw() {
   background(0, 0, 64);
  
    fill(255);
    background(bg);
  
  rect(x, y, 50, 50);
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x - 10;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 10;
  } else if (keyCode === UP_ARROW) {
    y = y - 10;
  } else if (keyCode === DOWN_ARROW) {
    y = y + 10;
  }

  return false; // prevent any default behavior
}