var myDiameter = 100;
var posX = 0;
var posY = 0;
var time = 0;
var lines = [];
var xoff = 0.0
var x = 300
var y = 0
var dX = 0
var dY = 0
var angle = 0
var positionShifts = 0


function setup() 
{
  background(0);
  createCanvas(windowWidth, windowHeight); 
  noStroke();  
  bug = new Fish(300,300);
}
function draw() 
{ 
  
 background(42,61,104);
  i = random(100)
  // console.log(n)
  x1 = random(windowWidth)
  y1 = random(windowHeight / 4)

  if (time % 20 === 0) {
    lines.push(new Fish(x1, y1))
  }
  for (var i=0; i<lines.length; i++) {
    if (time % 20 === 0) {
      // print('working')
      lines[i].updatePositionShifts(angle);
    }
    // lines[i].updatePositionShifts(angle);
    // positionShifts = mouseX
    lines[i].move();
    lines[i].moveHead();
    lines[i].moveBody();
    lines[i].moveArms();
    lines[i].moveTail();
    lines[i].moveEndTail();
    lines[i].display();
    if (lines[i].heady > windowHeight - 100) {
      lines.splice(i, 1);
      // print(lines)
    }
  }
  time += 1
  angle += 0.1
}


// Fish class
function Fish(x, y) {
  this.headx = x + 6;
  this.heady = y - 30;
  this.positionShifts = this.headx
  this.bodyx = x - 7
  this.bodyy = y - 30
  this.tailx = x - 15
  this.taily = y - 60
  this.endTailx = x 
  this.endTaily = y - 90
  this.frontHeadx = x
  this.frontHeady = y
  this.armx = x
  this.army = y - 60
  

  this.display = function() {
    fill(195,204,219)
    beginShape();
    vertex(this.frontHeadx - 2, this.frontHeady)
    vertex(this.frontHeadx - 26, this.frontHeady)
    vertex(this.headx - 30, this.heady)
    vertex(this.headx, this.heady)
    endShape();
    fill(255)
    ellipse(this.frontHeadx - 2, this.frontHeady - 10, 10, 10)
    ellipse(this.frontHeadx - 26, this.frontHeady - 10, 10, 10)
    fill(150,102,56)
    beginShape();
    
    vertex(this.bodyx - 4, this.bodyy)
    vertex(this.armx, this.army)
    vertex((this.bodyx - 16 + this.tailx) / 2, (this.bodyy +  2* this.taily) / 3)
    vertex((this.headx - 24 + this.tailx - 20) / 2, (this.heady + 2 * this.taily) / 3)
    vertex(this.armx - 30, this.army)
    vertex(this.bodyx - 26, this.bodyy)
    endShape();
    
    fill(152,172,197)
    beginShape();
    vertex(this.bodyx - 4, this.bodyy)
    vertex(this.tailx - 10, this.taily)
    vertex(this.tailx - 20, this.taily)
    vertex(this.bodyx - 26, this.bodyy)
    endShape();
    
    fill(71,90,133)
    beginShape();
    vertex(this.tailx - 10, this.taily);
    vertex(this.endTailx, this.endTaily);
    vertex(this.endTailx - 30, this.endTaily);
    vertex(this.tailx - 20, this.taily);
    endShape();
  }
    this.move = function() {
    this.frontHeady += 1
    dX = (this.positionShifts - this.frontHeadx) / 800
    this.frontHeadx += dX
  }
  
  this.moveHead = function() {
    this.heady += 1
    dHead = (this.frontHeadx - this.headx) / 5
    this.headx += dHead
  }
  this.moveBody = function() {
    this.bodyy += 1
    dBody = (this.headx - this.bodyx) / 2
    this.bodyx += dBody
  }
  
  this.moveArms = function() {
    this.army += 1
    dArm = (this.headx - this.armx) / 10
    this.armx += dArm
    
  }
    this.moveTail = function() {
    this.taily += 1
    dTail = (this.bodyx - this.tailx) / 5
    this.tailx += dTail
  }
  this.moveEndTail = function() {
    this.endTaily += 1
    dEndTail = (this.tailx - this.endTailx) / 10
    this.endTailx += dEndTail
  }
  this.updatePositionShifts = function(angle) {
    this.positionShifts = this.headx + (mouseX / windowWidth) * random(-2000,2000)
    // this.positionShifts =  (mouseX / windowWidth) * random(300) * cos(angle)
    // print((mouseX / windowWidth) * random(-400,400))
  }
}
