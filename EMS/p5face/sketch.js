var ctracker;
var prevPosition = 0;
var flag = true;
var timer = 0;
var count = 0;

function setup() {

  // setup camera capture
  var videoInput = createCapture(VIDEO);
  videoInput.size(400, 300);
  videoInput.position(0, 0);

  //hide video feed
  videoInput.hide();

  // setup canvas
  var cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);

  // setup tracker
  ctracker = new clm.tracker();
  ctracker.init(pModel);
  ctracker.start(videoInput.elt);

  noStroke();

}

function draw() {
  background(255, 255, 255);
  fill(0);
  // get array of face marker positions [x, y] format
  var positions = ctracker.getCurrentPosition();



  if (positions[0] !== undefined) {
    //1
    var leftCheekY = (positions[34][1] + positions[1][1]) / 2 * 3;
    var leftCheekX = (4 * positions[1][0] + positions[34][0]) * 3 / 5;
    var rightCheekY = (positions[40][1] + positions[13][1]) / 2 * 3;
    var rightCheekX = (positions[40][0] + 4 * positions[13][0]) * 3 / 5;
    // rect(leftCheekX, leftCheekY, 10, 10);
    // rect(rightCheekX, rightCheekY, 10, 10);
    
    var leftCheekY1 = (positions[36][1] + positions[2][1]) / 2 * 3;
    var leftCheekX1 = (positions[1][0] + positions[36][0]) / 2 * 3;
    var rightCheekY1 = (positions[38][1] + positions[12][1]) / 2 * 3;
    var rightCheekX1 = (positions[38][0] + positions[12][0]) / 2 * 3;
    // rect(leftCheekX1, leftCheekY1, 10, 10);
    // rect(rightCheekX1, rightCheekY1, 10, 10);
    
    var rightStacheX = (positions[49][0] + positions[11][0]) / 2 * 3;
    var rightStacheY = (positions[49][1] + positions[11][1]) / 2 * 3;
    var leftStacheX = (positions[45][0] + positions[3][0]) / 2 * 3;
    var leftStacheY = (positions[45][1] + positions[3][1]) / 2 * 3;
    // rect(rightStacheX, rightStacheY, 10, 10);
    // rect(leftStacheX, leftStacheY, 10, 10);
    
    var rightStacheX1 = (positions[5][0] + 3 * positions[9][0]) / 4 * 3;
    var rightStacheY1 = (positions[50][1] + 2 * positions[8][1]);
    var leftStacheX1 = (3 * positions[5][0] + positions[9][0]) / 4 * 3;
    var leftStacheY1 = (positions[44][1] + 2 * positions[6][1]);
    rect(rightStacheX1, rightStacheY1, 10, 10);
    rect(leftStacheX1, leftStacheY1, 10, 10);
    
    var rightForeheadX = (positions[33][0] + positions[40][0]) / 2 * 3;
    var rightForeheadY = (positions[33][1] + positions[14][1]) / 2 * 3;
    var leftForeheadX = (positions[33][0] + positions[34][0]) / 2 * 3;
    var leftForeheadY = (positions[33][1] + positions[0][1]) / 2 * 3;
    // rect(rightForeheadX, rightForeheadY, 10, 10);
    // rect(leftForeheadX,leftForeheadY, 10, 10);
    
    var rightForeheadX1 = (positions[28][0] + positions[14][0]) / 2 * 3;
    var rightForeheadY1 = (positions[28][1] + positions[14][1]) / 2 * 3;
    var leftForeheadX1 = (positions[0][0] + positions[23][0]) / 2 * 3;
    var leftForeheadY1 = (positions[0][1] + positions[23][1]) / 2 * 3;
    // rect(rightForeheadX1, rightForeheadY1);
    // rect(leftForeheadX1, leftForeheadY1);
    

    
    //shadows on the side of the head
    fill(43, 28, 9);
    beginShape();
    // vertex(3 * positions[16][0], 3 * positions[16][1]);
    vertex(rightForeheadX1, rightForeheadY1);
    vertex(rightCheekX, rightCheekY);
    vertex(3 * positions[12][0], 3 * positions[12][1]);
    vertex(3 * positions[13][0], 3 * positions[13][1]);
    vertex(3 * positions[14][0], 3 * positions[14][1]);
    vertex(3 * positions[15][0], 3 * positions[15][1]);
    endShape();

    beginShape();
    // vertex(3 * positions[20][0], 3 * positions[20][1]);
    vertex(leftForeheadX1, leftForeheadY1);
    vertex(leftCheekX, leftCheekY);
    vertex(3 * positions[2][0], 3 * positions[2][1]);
    vertex(3 * positions[1][0], 3 * positions[1][1]);
    vertex(3 * positions[0][0], 3 * positions[0][1]);
    vertex(3 * positions[19][0], 3 * positions[19][1]);
    endShape();

    
    //shadow under cheek
    fill(114, 61, 27);
    beginShape();
    vertex(rightCheekX, rightCheekY);
    vertex(rightCheekX1, rightCheekY1);
    vertex(rightStacheX, rightStacheY);
    vertex(3 * positions[12][0], 3 * positions[12][1]);
    endShape();

    beginShape();
    vertex(leftCheekX, leftCheekY);
    vertex(leftCheekX1, leftCheekY1);
    vertex(leftStacheX, leftStacheY);
    vertex(3 * positions[2][0], 3 * positions[2][1]);
    endShape();
    
    //side cheek shading
    fill(154, 89, 72);
    beginShape();
    vertex(rightStacheX, rightStacheY);
    vertex(3 * positions[9][0], 3 * positions[9][1]);
    vertex(3 * positions[10][0], 3 * positions[10][1]);
    vertex(3 * positions[11][0], 3 * positions[11][1]);
    vertex(3 * positions[12][0], 3 * positions[12][1]);
    endShape();
    
    beginShape();
    vertex(leftStacheX, leftStacheY);
    vertex(3 * positions[5][0], 3 * positions[5][1]);
    vertex(3 * positions[4][0], 3 * positions[4][1]);
    vertex(3 * positions[3][0], 3 * positions[3][1]);
    vertex(3 * positions[2][0], 3 * positions[2][1]);
    endShape();
    
    //sideOfNoseCheek
    fill(123, 87, 65);
    beginShape();
    vertex(rightStacheX, rightStacheY);
    vertex(rightCheekX1, rightCheekY1);
    vertex(3 * positions[39][0], 3 * positions[39][1]);
    vertex(3 * positions[38][0], 3 * positions[38][1]);
    endShape();
    
    beginShape();
    vertex(leftStacheX, leftStacheY);
    vertex(leftCheekX1, leftCheekY1);
    vertex(3 * positions[35][0], 3 * positions[35][1]);
    vertex(3 * positions[36][0], 3 * positions[36][1]);
    endShape();
    
    //super light skinned cheek
    fill(230, 180, 170);
    beginShape();
    vertex(rightCheekX1, rightCheekY1);
    vertex(rightCheekX, rightCheekY);
    vertex(rightForeheadX1, rightForeheadY1);
    vertex(3 * positions[28][0], 3 * positions[28][1]);
    vertex(3 * positions[70][0], 3 * positions[70][1]);
    vertex(3 * positions[31][0], 3 * positions[31][1]);
    vertex(3 * positions[69][0], 3 * positions[69][1]);
    vertex(3 * positions[30][0], 3 * positions[30][1]);
    vertex(rightForeheadX, rightForeheadY);
    vertex(3 * positions[40][0], 3 * positions[40][1]);
    vertex(3 * positions[39][0], 3 * positions[39][1]);
    endShape();
    
    beginShape();
    vertex(leftForeheadX1, leftForeheadY1);
    vertex(leftCheekX, leftCheekY);
    vertex(leftCheekX1, leftCheekY1);
    vertex(3 * positions[35][0], 3 * positions[35][1]);
    vertex(3 * positions[34][0], 3 * positions[34][1]);
    vertex(leftForeheadX, leftForeheadY);
    vertex(3 * positions[25][0], 3 * positions[25][1]);
    vertex(3 * positions[65][0], 3 * positions[65][1]);
    vertex(3 * positions[26][0], 3 * positions[26][1]);
    vertex(3 * positions[66][0], 3 * positions[66][1]);
    vertex(3 * positions[23][0], 3 * positions[23][1]);
    endShape();
    
    
    //beard
    fill(0);
    beginShape();
    vertex(3 * positions[36][0], 3 * positions[36][1]);
    vertex(3 * positions[37][0], 3 * positions[37][1]);
    vertex(3 * positions[38][0], 3 * positions[38][1]);
    vertex(rightStacheX, rightStacheY);
    vertex(3 * positions[9][0], 3 * positions[9][1]);
    vertex(3 * positions[8][0], 3 * positions[8][1]);
    vertex(3 * positions[7][0], 3 * positions[7][1]);
    vertex(3 * positions[6][0], 3 * positions[6][1]);
    vertex(3 * positions[5][0], 3 * positions[5][1]);
    vertex(leftStacheX, leftStacheY);
    endShape();
    
    fill(184, 132, 104);
    beginShape();
    vertex(rightStacheX1, rightStacheY1);
    vertex(3 * positions[52][0], 3 * positions[52][1]);
    vertex(3 * positions[53][0], 3 * positions[53][1]);
    vertex(3 * positions[54][0], 3 * positions[54][1]);
    vertex(leftStacheX1, leftStacheY1); 
    vertex(3 * positions[44][0], 3 * positions[44][1]);
    vertex(3 * positions[45][0], 3 * positions[45][1]);
    vertex(3 * positions[46][0], 3 * positions[46][1]);
    vertex(3 * positions[47][0], 3 * positions[47][1]);
    vertex(3 * positions[48][0], 3 * positions[48][1]);
    vertex(3 * positions[49][0], 3 * positions[49][1]);
    vertex(3 * positions[50][0], 3 * positions[50][1]);
    endShape();
    
    //tower nose shading
    fill(208, 120, 88);
    beginShape();
    vertex(rightForeheadX, rightForeheadY);
    vertex(3 * positions[40][0], 3 * positions[40][1]);
    vertex(3 * positions[43][0], 3 * positions[43][1]);
    vertex(3 * positions[33][0], 3 * positions[33][1]);
    endShape();
    
    beginShape();
    vertex(leftForeheadX, leftForeheadY);
    vertex(3 * positions[34][0], 3 * positions[34][1]);
    vertex(3 * positions[42][0], 3 * positions[42][1]);
    vertex(3 * positions[33][0], 3 * positions[33][1]);    
    endShape();
    
    fill(231, 149, 112);
    beginShape();
    vertex(3 * positions[43][0], 3 * positions[43][1]);  
    vertex(3 * positions[38][0], 3 * positions[38][1]);  
    vertex(3 * positions[39][0], 3 * positions[39][1]);  
    vertex(3 * positions[40][0], 3 * positions[40][1]);  
    endShape();
    
    beginShape();
    vertex(3 * positions[42][0], 3 * positions[42][1]);  
    vertex(3 * positions[36][0], 3 * positions[36][1]);  
    vertex(3 * positions[35][0], 3 * positions[35][1]);  
    vertex(3 * positions[34][0], 3 * positions[34][1]);  
    endShape();
    
    fill(253, 195, 194);
    beginShape();
    vertex(3 * positions[43][0], 3 * positions[43][1]);  
    vertex(3 * positions[62][0], 3 * positions[62][1]);  
    vertex(3 * positions[42][0], 3 * positions[42][1]);  
    vertex(3 * positions[37][0], 3 * positions[37][1]);  
    endShape();
    
    //nose bridge
    fill(222, 157, 134);
    beginShape();
    vertex(3 * positions[42][0], 3 * positions[42][1]);  
    vertex(3 * positions[62][0], 3 * positions[62][1]);  
    vertex(3 * positions[43][0], 3 * positions[43][1]);  
    vertex(3 * positions[33][0], 3 * positions[33][1]);  
    endShape();
    
    //more nose crap
    fill(51, 29, 21);
    beginShape();
    vertex(3 * positions[37][0], 3 * positions[37][1]);  
    vertex(3 * positions[43][0], 3 * positions[43][1]);  
    vertex(3 * positions[38][0], 3 * positions[38][1]); 
    endShape();
    
    beginShape();
    vertex(3 * positions[36][0], 3 * positions[36][1]);  
    vertex(3 * positions[37][0], 3 * positions[37][1]);  
    vertex(3 * positions[42][0], 3 * positions[42][1]); 
    endShape();
    
    //center forehead
    fill(199, 140, 114);
    beginShape();
    vertex(3 * positions[21][0], 3 * positions[21][1]);  
    vertex(3 * positions[17][0], 3 * positions[17][1]); 
    vertex(3 * positions[18][0], 3 * positions[18][1]); 
    vertex(rightForeheadX, rightForeheadY);
    vertex(3 * positions[33][0], 3 * positions[33][1]);
    vertex(leftForeheadX, leftForeheadY)
    vertex(3 * positions[22][0], 3 * positions[22][1]);  
    endShape();   
    
    //WEED EYES
    fill(253, 149, 126);
    beginShape();
    vertex(3 * positions[23][0], 3 * positions[23][1]); 
    vertex(3 * positions[63][0], 3 * positions[63][1]); 
    vertex(3 * positions[24][0], 3 * positions[24][1]); 
    vertex(3 * positions[64][0], 3 * positions[64][1]); 
    vertex(3 * positions[25][0], 3 * positions[25][1]); 
    vertex(3 * positions[65][0], 3 * positions[65][1]); 
    vertex(3 * positions[26][0], 3 * positions[26][1]); 
    vertex(3 * positions[66][0], 3 * positions[66][1]); 
    endShape();
    
    beginShape();
    vertex(3 * positions[30][0], 3 * positions[30][1]); 
    vertex(3 * positions[68][0], 3 * positions[68][1]); 
    vertex(3 * positions[29][0], 3 * positions[29][1]); 
    vertex(3 * positions[67][0], 3 * positions[67][1]); 
    vertex(3 * positions[28][0], 3 * positions[28][1]); 
    vertex(3 * positions[70][0], 3 * positions[70][1]); 
    vertex(3 * positions[31][0], 3 * positions[31][1]); 
    vertex(3 * positions[69][0], 3 * positions[69][1]); 
    endShape();
    
    
    
    
    fill(0);
    var eyeDiameter = 3 * (positions[70][0] - positions[69][0]) * 0.7;
    arc(3 * positions[32][0], 3 * positions[32][1], eyeDiameter,eyeDiameter, 0, Math.PI, OPEN);
    arc(3 * positions[27][0], 3 * positions[27][1], eyeDiameter,eyeDiameter, 0, Math.PI, OPEN);
    
    //shadow under eyebrows
    fill(114, 61, 27);
    beginShape();
    vertex(rightForeheadX, rightForeheadY)
    vertex(3 * positions[18][0], 3 * positions[18][1]); 
    vertex(3 * positions[17][0], 3 * positions[17][1]); 
    vertex(3 * positions[16][0], 3 * positions[16][1]); 
    endShape();
    
    beginShape();
    vertex(leftForeheadX, leftForeheadY)
    vertex(3 * positions[22][0], 3 * positions[22][1]); 
    vertex(3 * positions[21][0], 3 * positions[21][1]); 
    vertex(3 * positions[20][0], 3 * positions[20][1]); 
    endShape();
    
    //shadow above eyes
    fill(128, 98, 87);
    beginShape();
    vertex(rightForeheadX1, rightForeheadY1);
    vertex(3 * positions[15][0], 3 * positions[15][1]); 
    vertex(3 * positions[16][0], 3 * positions[16][1]); 
    vertex(rightForeheadX, rightForeheadY);
    vertex(3 * positions[30][0], 3 * positions[30][1]); 
    vertex(3 * positions[68][0], 3 * positions[68][1]); 
    vertex(3 * positions[29][0], 3 * positions[29][1]); 
    vertex(3 * positions[67][0], 3 * positions[67][1]); 
    vertex(3 * positions[28][0], 3 * positions[28][1]); 
    endShape();
    
     beginShape();
    vertex(leftForeheadX1, leftForeheadY1);
    vertex(3 * positions[19][0], 3 * positions[19][1]); 
    vertex(3 * positions[20][0], 3 * positions[20][1]); 
    vertex(leftForeheadX, leftForeheadY);
    vertex(3 * positions[25][0], 3 * positions[25][1]); 
    vertex(3 * positions[64][0], 3 * positions[64][1]); 
    vertex(3 * positions[24][0], 3 * positions[24][1]); 
    vertex(3 * positions[63][0], 3 * positions[63][1]); 
    vertex(3 * positions[23][0], 3 * positions[23][1]); 
    endShape();

    //eye lids
    fill(180, 129, 118);
    beginShape();
    vertex(3 * positions[23][0], 3 * positions[23][1]); 
    vertex(3 * positions[63][0], 3 * positions[63][1]); 
    vertex(3 * positions[24][0], 3 * positions[24][1]); 
    vertex(3 * positions[64][0], 3 * positions[64][1]); 
    vertex(3 * positions[25][0], 3 * positions[25][1]); 
    vertex(3 * positions[27][0], 3 * positions[27][1]); 
    endShape();
        
    beginShape();
    vertex(3 * positions[30][0], 3 * positions[30][1]); 
    vertex(3 * positions[68][0], 3 * positions[68][1]); 
    vertex(3 * positions[29][0], 3 * positions[29][1]); 
    vertex(3 * positions[67][0], 3 * positions[67][1]); 
    vertex(3 * positions[28][0], 3 * positions[28][1]); 
    vertex(3 * positions[32][0], 3 * positions[32][1]); 
    endShape();
    
    //lips
    fill(0);
    beginShape();
    vertex(3 * positions[44][0], 3 * positions[44][1]); 
    vertex(3 * positions[45][0], 3 * positions[45][1]); 
    vertex(3 * positions[46][0], 3 * positions[46][1]); 
    vertex(3 * positions[47][0], 3 * positions[47][1]); 
    vertex(3 * positions[48][0], 3 * positions[48][1]); 
    vertex(3 * positions[49][0], 3 * positions[49][1]); 
    vertex(3 * positions[50][0], 3 * positions[50][1]); 
    vertex(3 * positions[51][0], 3 * positions[51][1]); 
    vertex(3 * positions[52][0], 3 * positions[52][1]); 
    vertex(3 * positions[53][0], 3 * positions[53][1]); 
    vertex(3 * positions[54][0], 3 * positions[54][1]); 
    vertex(3 * positions[55][0], 3 * positions[55][1]);
    endShape();
    
    fill(148, 98, 98);
    
    beginShape();
    vertex(3 * positions[44][0], 3 * positions[44][1]); 
    vertex(3 * positions[45][0], 3 * positions[45][1]); 
    vertex(3 * positions[46][0], 3 * positions[46][1]); 
    vertex(3 * positions[47][0], 3 * positions[47][1]); 
    vertex(3 * positions[48][0], 3 * positions[48][1]); 
    vertex(3 * positions[49][0], 3 * positions[49][1]); 
    vertex(3 * positions[50][0], 3 * positions[50][1]); 
    vertex(3 * positions[59][0], 3 * positions[59][1]); 
    vertex(3 * positions[60][0], 3 * positions[60][1]); 
    vertex(3 * positions[61][0], 3 * positions[61][1]); 
    endShape();
    
    beginShape();
    vertex(3 * positions[50][0], 3 * positions[50][1]); 
    vertex(3 * positions[51][0], 3 * positions[51][1]); 
    vertex(3 * positions[52][0], 3 * positions[52][1]); 
    vertex(3 * positions[53][0], 3 * positions[53][1]); 
    vertex(3 * positions[54][0], 3 * positions[54][1]); 
    vertex(3 * positions[55][0], 3 * positions[55][1]);
    vertex(3 * positions[44][0], 3 * positions[44][1]);
    vertex(3 * positions[56][0], 3 * positions[56][1]);
    vertex(3 * positions[57][0], 3 * positions[57][1]);
    vertex(3 * positions[58][0], 3 * positions[58][1]);
    endShape();
    
    // //HOODie allen
    // fill(0);
    // var hoodieHeight = (positions[62][1] - positions[33][1]) * 6;
    // var hoodieWidth = (positions[14][0] - positions[33][0]) * 2;
    // var hoodieRightX = 3* positions[14][0] + hoodieWidth;
    // var hoodieRightY = 3* positions[28][1];
    // var hoodieLeftX = 3 * positions[0][0] - hoodieWidth;
    // var hoodieLeftY = 3 * positions[23][1];
    // var hoodieUpX = 3 * positions[33][0]
    // var hoodieUpY = 3 * positions[33][1] - hoodieHeight;
    // var leftCornerX = 3 * positions[23][0];
    // var leftCornerY = 3 * positions[65][1] - hoodieHeight;
    // var rightCornerX = 3* positions[28][0];
    // var rightCornerY = 3 * positions[69][1] - hoodieHeight;
    // rect(rightCornerX, rightCornerY, 10, 10);
    // rect(leftCornerX, leftCornerY, 10, 10);
    // rect(hoodieUpX, hoodieUpY, 10, 10);
    // rect(hoodieRightX, hoodieRightY, 10, 10);
    // rect(hoodieLeftX, hoodieLeftY, 10, 10);
    
    // beginShape();
    // vertex(hoodieRightX, hoodieRightY);
    // vertex(3 * positions[14][0], 3 * positions[14][1]);
    // vertex(3 * positions[15][0], 3 * positions[15][1]);
    // vertex(3 * positions[16][0], 3 * positions[16][1]);
    // vertex(3 * positions[17][0], 3 * positions[17][1]);
    // vertex(3 * positions[21][0], 3 * positions[21][1]);
    // vertex(3 * positions[20][0], 3 * positions[20][1]);
    // vertex(3 * positions[19][0], 3 * positions[19][1]);
    // vertex(3 * positions[0][0], 3 * positions[0][1]);
    // vertex(hoodieLeftX, hoodieLeftY);
    // vertex(leftCornerX, leftCornerY);
    // vertex(hoodieUpX, hoodieUpY);
    // vertex(rightCornerX, rightCornerY);
    // endShape();
  }
}


