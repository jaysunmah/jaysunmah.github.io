var input;
var analyzer;
var volume = 0;
function setup() {
  createCanvas(600, 600);
  // Create an Audio input
  mic = new p5.AudioIn();
  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}
function draw() {
  background(200);
  // Get the overall volume (between 0 and 1.0)
  var v = mic.getLevel();
  // "Smooth" the volume variable with an easing function
  volume += (v-volume)/3;
  
  fill(0);
  noStroke();
  
  ellipse(200, 200, 100,100);
  ellipse(400, 200, 100,100);
  
  // Draw an ellipse size proportionally to the volume
  var mouthSize = map(volume, 0, 1, 10, 300);
  
  ellipse(300, 300, mouthSize, mouthSize/2);
}