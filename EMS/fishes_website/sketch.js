var img;



function setup() 
{
  var myCanvas = createCanvas(windowWidth, windowHeight); 
  // createCanvas(windowWidth, windowHeight);
  myCanvas.parent('p5Canvas');

  background(255,255,255);
  noStroke();
  
  img = loadImage('background.png')

}
function draw() {
  // image(img, 0,0);
  stroke(0);
  rect(100,100,200,200);
}

