//Dynamically drawn sprites
//sprite with a custom drawing function follows the mouse
//and changes shape according to its speed

var anim

function preload() {
    anim = loadAnimation("assets/testAnimation0000.png", "assets/testAnimation0016.png");
}
function setup() {
  createCanvas(800,400);  
  print(anim);
}

function draw() {
  background(255,255,255);  
  animation(anim, 300,300)
}