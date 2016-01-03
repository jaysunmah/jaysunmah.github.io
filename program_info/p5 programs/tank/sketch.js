//setup is executed once at the launch

var angle = 0
var pos = 0
var count = 0
var dropHeight = 0
var flag = false

function setup() {
  createCanvas(800, 800);  // Size must be the first statement
  stroke(255,255,255);     // Set line drawing color to white
  // strokeWeight(4);
  frameRate(60);
}
// The statements in draw() are executed until the 
// program is stopped. Each statement is executed in 
// sequence and after the last line is read, the first 
// line is executed again.
function draw() { 
  background(0);   // Set the background to black
  line(0,600, 800, 600)

	if (pos > 900) {
		pos = 0
		flag = true
	}
	else {
		flag = false
	}
	pos = pos + 3

	if (flag) {
		dropHeight = 0
	}
	dropHeight += 16
	rect(0,dropHeight, 20, 40)
	rect(120,dropHeight - 600, 20, 40)
	rect(240,dropHeight - 1200, 20, 40)
	rect(360,dropHeight - 1800, 20, 40)
	rect(480,dropHeight - 2400, 20, 40)
	rect(600,dropHeight - 3000, 20, 40)
	rect(720,dropHeight - 3600, 20, 40)


	rect(pos - 20, 600 - 50, 60, 50)
	rect(pos - 30, 600 - 30, 80, 30)
	rect(pos, 600 - 35, 80, 10)
 	// ellipse(pos + 30, 600 - 30, 60, 60)
} 

function setUpFallingRects(pos, height) {
	rect(pos, height, 20, 40)
}