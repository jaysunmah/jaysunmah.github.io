//setup is executed once at the launch
var dist = 1;
var COLS = 10;
var ROWS = 10;

function setup() {
  //create canvas
  createCanvas(windowWidth, windowHeight);
  
  //fill the background
  background(255,255,255);
  fill(0);
    for (var r = 0; r < 600; r+= 10) {
    for (var c = 0; c < 600; c += 10) {
      i = floor(random(4));
      if (i == 0) {
        beginShape();
        vertex(r, c);
        vertex(r + 10, c);
        vertex(r, c + 10);
        endShape();
      }
      else if (i == 1) {
        beginShape();
        vertex(r, c);
        vertex(r + 10, c);
        vertex(r + 10, c + 10);
        endShape();
      }
      else if (i == 2) {
        beginShape();
        vertex(r + 10, c);
        vertex(r + 10, c + 10);
        vertex(r, c + 10);
        endShape();
      }
      else if (i == 3) {
        beginShape();
        vertex(r, c);
        vertex(r, c + 10);
        vertex(r + 10, c + 10);
        endShape();
      }
    }
  }
  
}


//draw is executed every frame 60 times per second
function draw() {

  fill(0);

  // for(var r = 0; r < ROWS; r++) {
  //   for (var c = 0; c < COLS; c++) {
  //     for (var radius = 10; radius >0; radius --) {
  //       color = radius % 2;
  //       fill(color * 255);
  //       ellipse(c * 60, r * 60, radius * 5, radius * 5);
  //     } 
  //   }
  // }

}

