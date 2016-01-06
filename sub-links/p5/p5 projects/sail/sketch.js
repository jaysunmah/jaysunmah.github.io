var mic, fft;
var song
var x = 0
var color = 0
var colorPicker = 0;
var isIncreasing = true;
var bgColor = 0;
var justThundered = false
var timer = 0
var thunderTime = 0

function preload() {
  song = loadSound('/audio/sail.mp3')
}

function setup() {
   createCanvas(windowWidth,windowHeight);
   noFill();

   fft = new p5.FFT();
   fft.setInput(song);
   song.play()
   song.addCue(17.38, cue, "thunder")
   song.addCue(21.40, cue, "thunder")
   song.addCue(25.41, cue, "thunder")
   song.addCue(29.31, cue, "thunder")
   song.addCue(31.20, cue, "thunder")
   song.addCue(49.50, cue, "thunder")
   song.addCue(53.58, cue, "thunder")
   song.addCue(57.69, cue, "thunder")
   song.addCue(61.68, cue, "thunder")
   song.addCue(63.70, cue, "thunder")
   song.addCue(65.60, cue, "thunder")
   song.addCue(69.73, cue, "thunder")
   song.addCue(73.73, cue, "thunder")
   song.addCue(77.83, cue, "thunder")
   song.addCue(79.91, cue, "thunder")
   song.addCue(81.81, cue, "thunder")
    song.addCue(98.000, cue, "thunder")
   song.addCue(102.00, cue, "thunder")
   song.addCue(106.110, cue, "thunder")
   song.addCue(110.146, cue, "thunder")
   song.addCue(118.246, cue, "thunder")
   song.addCue(122.146, cue, "thunder")
   song.addCue(126.288, cue, "thunder")
   song.addCue(130.188, cue, "thunder")
  
   song.addCue(178.788, cue, "thunder")
   song.addCue(211.000, cue, "thunder")
   song.addCue(215.110, cue, "thunder")
   song.addCue(219.000, cue, "thunder")
   song.addCue(223.001, cue, "thunder")
  // noStroke();
  stroke(255);
  strokeWeight(5);
  background(0);

}


function draw() {

    resetThundered()
    if (justThundered) {
    background(0,0,0,40)      
    }

   var spectrum = fft.analyze();
  fill(abs(255 - colorPicker) % 255, (colorPicker) % 255, 255)
  color += 1
   beginShape();
   for (i = 0; i<20; i++) {
    vertex(i * 150, map(spectrum[i + 20], 0, 255, height + height / 2, -height / 4) + height / 2);
   }
   vertex(windowWidth, windowHeight)
   vertex(0, windowHeight);
   endShape();

   x += 1;
     if (isIncreasing) {
    colorPicker += 1;
  }
  else {
    colorPicker -= 1;
  }
  if (colorPicker == 180) {
    isIncreasing = false;
  }
  if (colorPicker == 2 && isIncreasing == false) {
    isIncreasing = true;
  }

  thunderTime += 1
}
function mousePressed() {
  screenJitter()
}
function resetThundered() {
  if (thunderTime == 20) {
    print('resetting')
    justThundered = false
  }
  // background(0)
}
function screenJitter() {
  print('wo')
  background(255,255,255)
  justThundered = true
  thunderTime = 0
}

function cue(id) {
  if (id == "thunder") {
    screenJitter()
  }
}