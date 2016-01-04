var myDiameter = 100;
var posX = 0;
var posY = 0;
var angle = 0;
var lines = []

function setup() 
{
  background(0);
  createCanvas(windowWidth, windowHeight); 
  noStroke();  
  bug = new Jitter(1);
}
function draw() 
{ 
  
 background(100, 100, 255, 1);
  i = random(10);
  x1 = random(windowWidth);
  x2 = random(windowWidth);
  sumX = abs(x2 - x1);
  y1 = random(windowHeight);
  y2 = random(windowHeight);
  sumY = abs(y2 - y1);
  if (i > 2) {
    lines.push(new Jitter(i % 2, sumX, sumY))
    print(i % 2)
  }
  for (var i=0; i<lines.length; i++) {
    lines[i].move();
    lines[i].display();
    if (lines[i].x > windowWidth + 100 || lines[i].y > windowHeight + 100) {
      lines.splice(i, 1);
    }
  }
}


// Jitter class
function Jitter(det, x, y) {
  this.x = x;
  this.y = y;
  this.diameter = random(10, 30);
  this.speed = 1;
  
  if (det < 1) {
  this.move = function() {
    this.x += 1
  };
  }
  else {
    this.move = function() {
      this.y += 1
    }
  }

  this.display = function() {
    rect(this.x, this.y, 10, 10)
  }
};
