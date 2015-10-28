//setup is executed once at the launch
var centerX;
var centerY;
var totalCenterX;
var totalCenterY;

var angle = 0;
var miniAngle = 0;
var miniAngle1 = 0;
var distance = 100;
var isShrinking = true
var bigAngle = 0;



function setup() {
  //create canvas
  createCanvas(500, 500);
  
  //fill the background
  background(0);
  
  totalCenterX = 250;
  totalCenterY = 250;
}


//draw is executed every frame 60 times per second
function draw() {
    background(0, 0, 0, 10);
  
  fill(miniAngle * 10 % 255, 255 - (miniAngle * 10 % 255), miniAngle * 10 % 255);
  // drawLoops(300, angle, miniAngle);
  
  if (isShrinking) {
    distance -= 1
  }
  else {
    distance += 1
  }
  if (distance == 10) {
    isShrinking = false
  }
  if (distance == 50) {
    isShrinking = true
  }
  
  centerX = totalCenterX + 100 * cos(bigAngle);
  centerY = totalCenterY + 100 * sin(bigAngle);
  
  var posX = centerX + distance * cos(angle);
  var posY = centerY + distance * sin(angle);

  var miniPosX = posX + distance * cos(miniAngle);
  var miniPosY = posY + distance * sin(miniAngle);

  var miniPosX1 = posX + distance * cos(miniAngle + PI);
  var miniPosY1 = posY + distance * sin(miniAngle + PI);
  
  
  var miniPosX11 = miniPosX1 + distance * cos(miniAngle1);
  var miniPosY11 = miniPosY1 + distance * sin(miniAngle1);

  var miniPosX12 = miniPosX1 + distance * cos(miniAngle1 + PI);
  var miniPosY12 = miniPosY1 + distance * sin(miniAngle1 + PI);

  stroke(miniAngle * 10 % 255, 255 - (miniAngle * 10 % 255), miniAngle * 10 % 255);
  strokeWeight(1);
  
  line(centerX, centerY, posX, posY);
  line(centerX, centerY, miniPosX, miniPosY);
  line(centerX, centerY, miniPosX1, miniPosY1);
  line(centerX, centerY, miniPosX11, miniPosY11);
  line(centerX, centerY, miniPosX12, miniPosY12);
  
  
  bigAngle += PI / 120;
  angle += PI / 60;
  miniAngle += PI / 30;
  miniAngle1 += PI / 60;
}