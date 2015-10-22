var myDiameter = 100;
var posX = 0;
var posY = 0;
var time = 0;
var lines = [];
var xoff = 0.0;
var x = 300;
var y = 0;
var dX = 0;
var dY = 0;
var angle = 0;
var positionShifts = 0;



function setup() 
{
  background(0);
  var myCanvas = createCanvas(windowWidth, windowHeight); 
  // myCanvas.parent('p5Canvas');
  // var url = 'http://api.openweathermap.org/data/2.5/weather?q=New%20York,NY&units=imperial&APPID=7bbbb47522848e8b9c26ba35c226c734';
  var url = 'http://api.openweathermap.org/data/2.5/weather?id=5206379&appid=bd82977b86bf27fb59a04b61b657fb6f';
  
  
  loadJSON(url, gotWeather);
  // Circle starts in the middle
  position = createVector(width/2, height/2);
  // wind starts as (0,0)
  wind = createVector();
  noStroke();  
  bug = new Fish(300,300);
}
function draw() 
{ 

  // print(wind.heading())
 background(106,202,243);

  x1 = random(windowWidth);
  y1 = random(windowHeight / 4);

  if (time % 40 === 0) {
    lines.push(new Fish(x1, y1));
  }
  push();  
  translate(windowWidth, windowHeight / 2);
  rotate(wind.heading() + 3 * PI / 2);
  for (var i=0; i<lines.length; i++) {
    // if (time % 20 === 0) {
    //   lines[i].updatePositionShifts(xoff);
    // }
    lines[i].updatePositionShifts();
    lines[i].move();
    lines[i].moveHead();
    lines[i].moveBody();
    lines[i].moveArms();
    lines[i].moveTail();
    lines[i].moveEndTail();
    lines[i].display();
    if (lines[i].heady > windowHeight + windowWidth) {
      lines.splice(i, 1);
    }
  }
  pop();
  time += 1;
  xoff += 0.1;
  

}


// Fish class
function Fish(x, y) {
  this.headx = x + 6;
  this.heady = y - 30;
  this.positionShifts = this.headx;
  this.bodyx = x - 7;
  this.bodyy = y - 30;
  this.tailx = x - 15;
  this.taily = y - 60;
  this.endTailx = x ;
  this.endTaily = y - 90;
  this.frontHeadx = x;
  this.frontHeady = y;
  this.armx = x;
  this.army = y - 60;
  this.offx = random(100);

  this.display = function() {
    fill(195,204,219);
    beginShape();
    vertex(this.frontHeadx - 2, this.frontHeady);
    vertex(this.frontHeadx - 26, this.frontHeady);
    vertex(this.headx - 30, this.heady);
    vertex(this.headx, this.heady);
    endShape();
    
    fill(255);
    ellipse(this.frontHeadx - 2, this.frontHeady - 10, 7, 7);
    ellipse(this.frontHeadx - 26, this.frontHeady - 10, 7, 7);
    
    
    fill(108,114,138);
    beginShape();
    vertex(this.bodyx - 4, this.bodyy);
    vertex(this.armx + 6, this.army + 7);
    vertex(this.armx, this.army + 5);
    vertex((this.bodyx - 16 + this.tailx) / 2, (this.bodyy +  2* this.taily) / 3);
    vertex((this.headx - 24 + this.tailx - 20) / 2, (this.heady + 2 * this.taily) / 3);
    vertex(this.armx - 30, this.army + 5);
    vertex(this.armx - 36, this.army + 7);
    vertex(this.bodyx - 26, this.bodyy);
    endShape();
    
    fill(131,143,246);
    beginShape();
    vertex(this.bodyx - 4, this.bodyy);
    vertex(this.tailx - 10, this.taily);
    vertex(this.tailx - 20, this.taily);
    vertex(this.bodyx - 26, this.bodyy);
    endShape();
    
    fill(0,139,211);
    beginShape();
    vertex(this.tailx - 10, this.taily);
    vertex(this.endTailx, this.endTaily);
    vertex(this.endTailx - 30, this.endTaily);
    vertex(this.tailx - 20, this.taily);
    endShape();
  };
    this.move = function() {
    this.frontHeady += 1;
    dX = (this.positionShifts - this.frontHeadx) / 10;
    this.frontHeadx += dX;
  };
  
  this.moveHead = function() {
    this.heady += 1;
    dHead = (this.frontHeadx - this.headx) / 7;
    this.headx += dHead;
  };
  this.moveBody = function() {
    this.bodyy += 1;
    dBody = (this.headx - this.bodyx) / 2;
    this.bodyx += dBody;
  };
  
  this.moveArms = function() {
    this.army += 1;
    dArm = (this.headx - this.armx) / 10;
    this.armx += dArm;
  };
    this.moveTail = function() {
    this.taily += 1;
    dTail = (this.bodyx - this.tailx) / 5;
    this.tailx += dTail;
  };
  
  this.moveEndTail = function() {
    this.endTaily += 1;
    dEndTail = (this.tailx - this.endTailx) / 10;
    this.endTailx += dEndTail;
  };
  
  this.updatePositionShifts = function() {
    // this.positionShifts = this.headx + (mouseX / windowWidth) * random(-2000,2000);
    var change = noise(this.offx, this.heady/100) * 100 - 50;

    change *= (mouseX / windowWidth);
    // if (mouseX < windowWidth /2 ) {
    //   change = 0;
    // }
    this.offx += 0.01;
    // if(frameCount%60==0)
    //   print(change);
    this.positionShifts = this.frontHeadx + change;
  };
}

function gotWeather(weather) {
  
  // Get the angle (convert to radians)
  var angle = radians(Number(weather.wind.deg));
  // Get the wind speed
  var windmag = Number(weather.wind.speed);
  
  // Make a vector
  wind = p5.Vector.fromAngle(angle);
}
