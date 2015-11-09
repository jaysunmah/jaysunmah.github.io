var song1;
var song2;
var song3;
var song4;

var listOfBalls = []
var radius = 30
var r = 200;
var g = 0
var b = 0
//setup is executed once at the launch
function setup() {
  //create canvas
  createCanvas(windowWidth, windowHeight);
  // song = loadSound('tempSound.wav');
  song1 = loadSound('A.mp3');
  song2 = loadSound('B.mp3');
  song3 = loadSound('C.mp3');
  song4 = loadSound('D.mp3');
  //fill the background
  background(255);
  noStroke();
  //draw an ellipse
}


//draw is executed every frame 60 times per second
function draw() {
  background(r, g, b)
  fill(255)
  rect(100,100, 300, 300)
  for (var i = 0; i < listOfBalls.length; i++) {
    if (isTouching(listOfBalls[i], listOfBalls[i].x, listOfBalls[i].y, radius)) {
      // print(isTouching(listOfBalls[i].x, listOfBalls[i].y, radius))
      listOfBalls[i].move();
    }
    else {
      // r = random(0,255)
      // g = random(0,255)
      // b = random(0,255)
      // listOfBalls[i].changeDirection();
      // listOfBalls[i].direction *= -1;
      listOfBalls[i].move();
    }
      
    listOfBalls[i].display();
  }

}

function mousePressed() {
  // song.play();
  // var angle = random(0, 2 * PI);
  var angle = (PI / 2) * round(random(0,4));
  listOfBalls.push(new ball(mouseX, mouseY, angle))
}

function isTouching(ballObj, x, y, radius) {
  if ((x - radius / 2) < 100) {
    song4.play();
    ballObj.changeDirectionV();
  }
  if ((x + radius / 2) > 400) {
    song3.play();
    ballObj.changeDirectionV();
  }
  if ((y  - radius / 2) < 100) {
    song2.play();
    ballObj.changeDirectionH();
  }
  if ((y + radius / 2) > 400) {
    song1.play();
    ballObj.changeDirectionH();
  }
  return true
}

function ball(x, y, angle) {
  this.x = x;
  this.y = y;
  this.direction = 1;
  this.angle = angle
  
  this.display = function() {
    fill(0);
    ellipse(x, y, radius, radius);
  }
  
  this.changeDirectionH = function() {
    this.angle = 2 * PI - this.angle;  
  }
  this.changeDirectionV = function() {
    if (this.angle % 2 * PI <= PI / 2) {
      this.angle += 2 * (PI / 2 - this.angle);
    }
    else {
      this.angle += 2 * (3 * PI / 2 - this.angle);
    }
    // this.angle = 2 * PI - this.angle;  
  }
  
  this.move = function() {
    y += 10 * sin(this.angle);
    x += 10 * cos(this.angle);
    // x += 4* this.direction
    this.x = x;
    this.y = y;
  }
  
}