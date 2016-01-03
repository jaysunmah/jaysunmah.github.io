//setup is executed once at the launch
function setup() {
  //create canvas
  createCanvas(windowWidth, windowHeight);
  
  //fill the background
  background(255,255,255);
  noStroke();
  //draw an ellipse
}


//draw is executed every frame 60 times per second
function draw() {


}

function mouseClicked() {
  print('this went here');
  httpPost('jason.ma');
}

