var value = 0;
var x, y;
var bg, iron
var ironjump

function setup() {
  createCanvas(640, 480);
  bg = loadImage("bg.png");
  iron = loadImage("iron.png");
  
  noFill();
  x = 25;
  y = 300;
  ironjump=y;
}

function draw() {
   background(0, 0, 64);
  
    fill(255);
    background(bg);
  
  image(iron,x, y, 53, 56);
  if(y>350){
   y=350;
  }
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    x = x - 10;
  } else if (keyCode === RIGHT_ARROW) {
    x = x + 10;
  } else if (keyCode === UP_ARROW) {
    y = y - 10;
    ironjump=y;
  } else if (keyCode === DOWN_ARROW) {
    y = y + 10;
    ironjump=y;
  }

  return false; // prevent any default behavior
}

function keyTyped() {
  if (key === ' ') {
  
  } else if (key === ' ') {
   
  }