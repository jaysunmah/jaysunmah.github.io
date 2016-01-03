var input;
var analyzer;
var volume = 0;
var stageCount = 1;
var stage = 0;

function setup() {
  createCanvas(600, 600);

  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  // By default, it does not .connect() (to the computer speakers)
  mic.start();
}

function draw() {
  background(76,193,166);

  // Get the overall volume (between 0 and 1.0)
  var v = mic.getLevel();
  // "Smooth" the volume variable with an easing function
  volume += (v-volume)/3;
  
 var volumeStage = map(volume, 0,1,0,100);
    console.log("Voume stage " + stage + " stageCount " + stageCount);
    if (volumeStage > 5) {
    volumeStage = 0;
     stageCount += 1  
    }
    eye = new eyeBrows();
    
    if (stageCount % 25 == 0) {
        stageCount = 1;
        stage += 1   
    }
       
    fill((255 / 10 * stage), (255 / 10 * stage), (255 / 10 * stage));
    if (stage <= 1) {
        background(76,193,166);
        noStroke();
        //Face
        fill(231,207,137);
        rect(150,150,300,300);
        arc(300,155,316,70,Math.PI, 0);
        arc(150,300,70,300, Math.PI / 2, Math.PI / 2 + Math.PI);
        arc(300,445,316,70,0, Math.PI);
        arc(450,300,70,300, Math.PI + Math.PI / 2, Math.PI / 2 );
        //Mouth and Eyes
        fill(241,6,73);
        ellipse(200,250,25,50);
        ellipse(400,250,25,50);
        ellipse(300,380,130,70);    
        fill(231,207,137);
        ellipse(300, 370, 120, 70);
        
    }
    else if (stage == 2) {
        background(76,193,166);
        noStroke();
        //Face
        fill(231,207,137);
        rect(150,150,300,300);
        arc(300,155,316,70,Math.PI, 0);
        arc(150,300,70,300, Math.PI / 2, Math.PI / 2 + Math.PI);
        arc(300,445,316,70,0, Math.PI);
        arc(450,300,70,300, Math.PI + Math.PI / 2, Math.PI / 2 );
        //Mouth and Eyes
        fill(241,6,73);
        ellipse(200,250,45,50);
        ellipse(400,250,45,50);
        ellipse(300,380,130,70);
        fill(231,207,137);
        ellipse(300, 370, 120, 70);
        ellipse(200,258,45,50);
        ellipse(400,258,45,50);

        fill(250,197,57);
        ellipse(160, 320, 60, 60);
        ellipse(440, 320, 60, 60);
    }
    else if (stage == 3) {
        background(250,197,57);
        noStroke();
        //Face
        fill(231,207,137);
        rect(150,150,300,300);
        arc(300,155,316,70,Math.PI, 0);
        arc(150,300,70,300, Math.PI / 2, Math.PI / 2 + Math.PI);
        arc(300,445,316,70,0, Math.PI);
        arc(450,300,70,300, Math.PI + Math.PI / 2, Math.PI / 2 );
        //Eyes
        fill(241,6,73);
        ellipse(200,250,39,50);
        ellipse(400,250,39,50);
        //Mouth
        rect(260, 400, 80, 12);
        //cheeks
        ellipse(180, 400, 150,150);
        ellipse(420, 400, 150,150);
        fill(231,207,137);
        ellipse(177, 394, 145,140);
        ellipse(423, 394, 145,140);
        //blush
        fill(76,193,166);
        rect(140, 300, 60, 20, 20);
        rect(400, 300, 60, 20, 20);

    }
    else if (stage == 4) {
        background(246,104,42);
         noStroke();
        //Face
        fill(231,207,137);
        rect(150,150,300,300);
        arc(300,155,316,70,Math.PI, 0);
        arc(150,300,70,300, Math.PI / 2, Math.PI / 2 + Math.PI);
        arc(300,445,316,70,0, Math.PI);
        arc(450,300,70,300, Math.PI + Math.PI / 2, Math.PI / 2 );
        //Eyes
        fill(241,6,73);
        rect(165,220,90,60, 20);
        rect(345,220,90,60, 20);
        fill(231,207,137);
        rect(155,215,90,60, 20);
        rect(355,215,90,60, 20);
        
        //Mouth
        fill(241,6,73);
        ellipse(300, 410, 80, 75);
        fill(231,207,137);
        ellipse(300, 420, 80, 75);

        //cheeks
        fill(241,6,73);
        ellipse(180, 400, 150,150);
        ellipse(420, 400, 150,150);
        fill(231,207,137);
        ellipse(177, 394, 145,140);
        ellipse(423, 394, 145,140);
        //blush
        fill(76,193,166);
        rect(140, 300, 60, 20, 20);
        rect(400, 300, 60, 20, 20);
    }
    else if (stage == 5) {
        background(246,104,42);
         noStroke();
        //Face
        fill(231,207,137);
        rect(150,150,300,300);
        arc(300,155,316,70,Math.PI, 0);
        arc(150,300,70,300, Math.PI / 2, Math.PI / 2 + Math.PI);
        arc(300,445,316,70,0, Math.PI);
        arc(450,300,70,300, Math.PI + Math.PI / 2, Math.PI / 2 );
        //Eyes
        fill(241,6,73);
        ellipse(200,250,70,70);
        ellipse(400,250,70,70);

        
        //Mouth
        fill(241,6,73);
        ellipse(300, 410, 80, 75);
        fill(231,207,137);
        ellipse(300, 420, 80, 75);

        //cheeks
        fill(241,6,73);
        ellipse(180, 400, 170,170);
        ellipse(420, 400, 170,170);
        fill(231,207,137);
        ellipse(177, 394, 165,160);
        ellipse(423, 394, 165,160);
        //blush
        fill(76,193,166);
        rect(140, 300, 60, 20, 20);
        rect(400, 300, 60, 20, 20); 
    }
    else if (stage == 6) {
        background(241,6,73);
        noStroke();
        //Face
        fill(231,207,137);
        rect(150,150,300,300);
        arc(300,155,316,70,Math.PI, 0);
        arc(150,300,70,300, Math.PI / 2, Math.PI / 2 + Math.PI);
        arc(300,445,316,70,0, Math.PI);
        arc(450,300,70,300, Math.PI + Math.PI / 2, Math.PI / 2 );
        //Eyes
        fill(241,6,73);
        triangle(260, 290, 150, 240, 150, 340);
        triangle(340, 290, 450, 240, 450, 340);
        fill(231,207,137);
        triangle(240, 290, 130, 240, 130, 340);
        triangle(360, 290, 470, 240, 470, 340);
        
        //Mouth
        fill(241,6,73);
        rect(130, 370, 340, 90, 50);
        
        //barf
        fill(250,197,57);
        rect(140, 390, 320, 300, 20);
        fill(246,104,42);
        ellipse(240, 450, 80, 60);
        ellipse(300, 600, 60, 60);
        ellipse(400, 490, 60, 60);
        ellipse(190, 540, 55, 50);
        fill(231,207,137);
        ellipse(235, 445, 80, 60);
        ellipse(295, 595, 60, 60);
        ellipse(395, 485, 60, 60);
        ellipse(185, 535, 55, 50);

    }
//    else  if (stage == 7) {
//        fill(0,255,0);
//        ellipse(200,200,100,200);  
//    }
//     else if (stage == 8) {
//        fill(0,255,0);
//        ellipse(200,200,100,200);  
//    }
//    else  if (stage == 9) {
//        fill(0,255,0);
//        ellipse(200,200,100,200);  
//    }
    else if (stage == 7) {
//        fill(0,255,0);
//        ellipse(200,200,100,200); 
     stage = 0;   
    }
//    rect(300,300,50,50);
//    line(400 + stage, 100 - 2 * stage, 450 - stage, 110 + 2 * stage); 
    
}

function eyeBrows() {

    this.rotate = function() {
        
    }
};

