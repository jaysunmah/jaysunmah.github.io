// import Math

var x = 0
var y = 0
var x1 = 0
var y1 = 0
var x2 = 0
var y2 = 0
var r = 20
var r1 = 15
var r2 = 10;
// var xoff = 0
// var yoff = 0
var angle = 0

function setup() {
  createCanvas(windowWidth, windowHeight);
  bgColor = color(255,255,255);
}

function draw() {
  background(bgColor);
  
  dx = (mouseX - x) / 10;
  dy = (mouseY - y) / 10;
  
  // x += dx
  // y += dy
  x = mouseX;
  y = mouseY;
  
  dx1 = (x - x1) / 10;
  dy1 = (y - y1) / 10;
  
  if(notTouching(x, y, x1, y1, r)) {
    x1 += dx1
    y1 += dy1  
  }
  dx2 = (x1 - x2) / 10;
  dy2 = (y1 - y2) / 10;
  
  if(notTouching(x1, y1, x2, y2, r1)) {
  x2 += dx2
  y2 += dy2
  }
  
  ellipse(x, y, 20, 20);
  ellipse(x1, y1, 15, 15);
  ellipse(x2, y2, 10, 10);

}

function Fish(x, y) {
  this.x = x
  this.y = y
  
  
}

function notTouching(x1, y1, x2, y2, r1) {
  tempDist = Math.sqrt(((x1 - x2) * (x1 - x2) + (y1 - y2) * (y1 - y2)));
  return tempDist > (r1)
}







