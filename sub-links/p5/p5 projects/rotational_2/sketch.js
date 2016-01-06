
var angle = 0;
var diameter = 0;
var colorPicker = 0;
var isIncreasing = true;

//setup is executed once at the launch



function setup() {
  //create canvas
  createCanvas(500, 500);
  
  //fill the background
  
  background(0);
  // noStroke();
}


//draw is executed every frame 60 times per second
function draw() {
  fill(255);
  background(0,0,0);
  // background(255);
  imageMode(CENTER);
  
  for (var i = 0; i < 500; i += 40) {
  if (i % 80 == 0) {
    fill(colorPicker % 255, abs(255 - colorPicker) % 255, (colorPicker / 2) % 255);
  }
  else {
    fill(0);
  }
  // ellipse(250 + 40 * cos(angle + i / 150),250 + 40 * sin(angle + i / 150),500 - i,500 - i);
  ellipse(250 + 40 * cos(angle + i / 85),250,500 - i,500 - i);
  // image(img, 250 + 40 * cos(angle + i / 85, 250, 500 - i, 500 - i));
  }
 fill(0);
 ellipse(250 + 40 * cos(angle + 460 / 85), 250, 40, 40);
  diameter += 1;
  angle += PI / 30;
  if (isIncreasing) {
    colorPicker += 1;
  }
  else {
    colorPicker -= 1;
  }
  if (colorPicker == 255) {
    isIncreasing = false;
  }
  if (colorPicker == 0 && isIncreasing == false) {
    isIncreasing = true;
  }
}
