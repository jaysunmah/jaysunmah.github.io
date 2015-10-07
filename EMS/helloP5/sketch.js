//setup is executed once at the launch
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
    
  // ellipse(400,100,150,150)
  // ellipse(400,300,150,150)
  // ellipse(400,600,300,300)
  
  // // line(400,100,400,600)
  // ellipse(90 * cos(angle) + 400, 90 * sin(angle) + 600, 30, 30)
  // ellipse(90 * cos(angle + 1.2) + 400, 90 * sin(angle + 1.2) + 600, 30, 30)
  // ellipse(85 * cos(angle + 3.8) + 400, 85 * sin(angle + 3.8) + 600, 100, 100)


  // x1 = 75 * cos(angle) + 400
  // y1 = 75 * sin(angle) + 100
  // x2 = 75 * cos(angle + 0.4) + 400
  // y2 = 75 * sin(angle + 0.4) + 100
  // x3 = 75 * cos(angle + 0.8) + 400
  // y3 = 75 * sin(angle + 0.8) + 100
  // x4 = 75 * cos(angle + 1.2) + 400
  // y4 = 75 * sin(angle + 1.2) + 100
  // x5 = 75 * cos(angle + 1.6) + 400
  // y5 = 75 * sin(angle + 1.6) + 100
  // x6 = 75 * cos(angle + 2.0) + 400
  // y6 = 75 * sin(angle + 2.0) + 100
  // x7 = 75 * cos(angle + 2.4) + 400
  // y7 = 75 * sin(angle + 2.4) + 100
  // x8 = 75 * cos(angle + 2.8) + 400
  // y8 = 75 * sin(angle + 2.8) + 100
  // x9 = 75 * cos(angle + 3.2) + 400
  // y9 = 75 * sin(angle + 3.2) + 100
  // x10 = 75 * cos(angle + 3.6) + 400
  // y10 = 75 * sin(angle + 3.6) + 100
  // x11 = 75 * cos(angle + 4.0) + 400
  // y11 = 75 * sin(angle + 4.0) + 100
  // x12 = 75 * cos(angle + 4.4) + 400
  // y12 = 75 * sin(angle + 4.4) + 100
  // x13 = 75 * cos(angle + 4.8) + 400
  // y13 = 75 * sin(angle + 4.8) + 100
  // x14 = 75 * cos(angle + 5.2) + 400
  // y14 = 75 * sin(angle + 5.2) + 100
  // x15 = 75 * cos(angle + 5.65) + 400
  // y15 = 75 * sin(angle + 5.65) + 100
  // x16 = 75 * cos(angle + 6.1) + 400

  // line(x1,y1,475,300)
  // line(x2,y2,75 * cos(0.4) + 400, 75 * sin(0.4) + 300)
  // line(x3,y3,75 * cos(0.8) + 400, 75 * sin(0.8) + 300)
  // line(x4,y4,75 * cos(1.2) + 400, 75 * sin(1.2) + 300)
  // line(x5,y5,75 * cos(1.6) + 400, 75 * sin(1.6) + 300)
  // line(x6,y6,75 * cos(2.0) + 400, 75 * sin(2.0) + 300)
  // line(x7,y7,75 * cos(2.4) + 400, 75 * sin(2.4) + 300)
  // line(x8,y8,75 * cos(2.8) + 400, 75 * sin(2.8) + 300)
  // line(x9,y9,75 * cos(3.2) + 400, 75 * sin(3.2) + 300)
  // line(x10,y10,75 * cos(3.6) + 400, 75 * sin(3.6) + 300)
  // line(x11,y11,75 * cos(4.0) + 400, 75 * sin(4.0) + 300)
  // line(x12,y12,75 * cos(4.4) + 400, 75 * sin(4.4) + 300)
  // line(x13,y13,75 * cos(4.8) + 400, 75 * sin(4.8) + 300)
  // line(x14,y14,75 * cos(5.2) + 400, 75 * sin(5.2) + 300)
  // line(x15,y15,75 * cos(5.65) + 400, 75 * sin(5.65) + 300)
}