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
background(255);
  for (var i = 0; i < 3000; i += 60) {
    for (var l = 0; l < 3000; l += 60) {
      var a = findMouseAngle(i, l);
    house(i,l,a,i % 255, l % 255,200);

    }
  }
  
function findMouseAngle(x, y) {
  var angle = atan2(mouseY - y, mouseX - x);
  return angle;
}

}

function house(x, y, a,r,g,b) {
  fill(r,g,b);
  push();
  translate(x, y);
  rotate(a + PI / 4);
  triangle(15, 0, 0, 15, 30, 15);
  rect(0, 15, 30, 30);
  pop();
}