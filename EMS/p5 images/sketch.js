//setup is executed once at the launch

function preload() {
  img = loadImage("cat.png")
}

function setup() {
  //create canvas
  createCanvas(windowWidth, windowHeight);
  
  //fill the background
  background(255,255,255);
  
  //draw an ellipse
  ellipse(width/2, height/2, 50, 50);
  
}


//draw is executed every frame 60 times per second
function draw() {
  // draw stuff here
  // translate( -mouseX / 2,  -mouseY / 2);
  imageMode(CENTER);
  tint(img, mouseX, mouseY, 50);
  image(img, mouseX, mouseY);

}