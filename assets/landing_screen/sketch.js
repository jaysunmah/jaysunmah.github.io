
// function setup() 
// {
//   // var myCanvas = createCanvas(windowWidth, windowHeight); 
//   createCanvas(windowWidth, windowHeight);
//   // myCanvas.parent('p5Canvas');

//   background(209,231,249);
//   noStroke();
  
//   img = loadImage('background.png')

// }
// function draw() {
//   fill(196, 208, 245);
//   rect(100,100,200,200);
// }

var flock;
var flockNum;

var text;

function setup() {
  // createCanvas(windowWidth, windowHeight);
  var myCanvas = createCanvas(0.96 * windowWidth, 0.95 * windowHeight); 
  myCanvas.parent('p5Canvas');

  flock = new Flock();
  // Add an initial set of boids into the system
  if (windowWidth < 500) {
    flockNum = 20;
  }
  else {
    flockNum = 70
  }
  for (var i = 0; i < flockNum; i++) {
    var b = new Boid(width/2,height/2);
    flock.addBoid(b);
  }
}

function draw() {
  background(122, 167, 214);
  flock.run();

  textSize(60);
  fill(255);
  textAlign(CENTER);
  textFont('Georgia');
  var message = 'Jason Ma';
  text(message, windowWidth / 2, windowHeight / 2);
  
  textSize(30);
  var message2 = 'artist'
  var message3 = 'programmer'
  var messageWidth = textWidth('Jason Ma');
  var message2Width = textWidth('resume')
  text(message2, windowWidth / 2 - 94, windowHeight / 2 + 30);
  ellipse(windowWidth / 2 - 49, windowHeight / 2 + 22.5, 8, 8);
  text(message3, windowWidth / 2 + 44, windowHeight / 2 + 30);
 
}

// Add a new boid into the System
// function mouseDragged() {
//   flock.addBoid(new Boid(mouseX,mouseY));
// }

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Flock object
// Does very little, simply manages the array of all the boids

function Flock() {
  // An array for all the boids
  this.boids = []; // Initialize the array
}

Flock.prototype.run = function() {
  for (var i = 0; i < this.boids.length; i++) {
    this.boids[i].run(this.boids);  // Passing the entire list of boids to each boid individually
  }
}

Flock.prototype.addBoid = function(b) {
  this.boids.push(b);
}

// The Nature of Code
// Daniel Shiffman
// http://natureofcode.com

// Boid class
// Methods for Separation, Cohesion, Alignment added

function Boid(x,y) {
  this.acceleration = createVector(0,0);
  this.velocity = createVector(random(-1,1),random(-1,1));
  this.position = createVector(x,y);
  this.r = 12;
  this.maxspeed = 3;    // Maximum speed
  this.maxforce = 0.05; // Maximum steering force

}

Boid.prototype.run = function(boids) {
  this.flock(boids);
  this.update();
  this.borders();
  this.render();
}

Boid.prototype.applyForce = function(force) {
  // We could add mass here if we want A = F / M
  this.acceleration.add(force);
}

// We accumulate a new acceleration each time based on three rules
Boid.prototype.flock = function(boids) {
  var sep = this.separate(boids);   // Separation
  var ali = this.align(boids);      // Alignment
  var coh = this.cohesion(boids);   // Cohesion
  // Arbitrarily weight these forces
  sep.mult(1.5);
  ali.mult(1.0);
  coh.mult(1.0);
  // Add the force vectors to acceleration
  this.applyForce(sep);
  this.applyForce(ali);
  this.applyForce(coh);
}

// Method to update location
Boid.prototype.update = function() {
  // Update velocity
  this.velocity.add(this.acceleration);
  // Limit speed
  this.velocity.limit(this.maxspeed);
  this.position.add(this.velocity);
  // Reset accelertion to 0 each cycle
  this.acceleration.mult(0);
}

// A method that calculates and applies a steering force towards a target
// STEER = DESIRED MINUS VELOCITY
Boid.prototype.seek = function(target) {
  var desired = p5.Vector.sub(target,this.position);  // A vector pointing from the location to the target
  // Normalize desired and scale to maximum speed
  desired.normalize();
  desired.mult(this.maxspeed);
  // Steering = Desired minus Velocity
  var steer = p5.Vector.sub(desired,this.velocity);
  steer.limit(this.maxforce);  // Limit to maximum steering force
  return steer;
}

Boid.prototype.render = function() {
  // Draw a triangle rotated in the direction of velocity
  // var theta = this.velocity.heading() + radians(90);
  var theta = PI + this.velocity.x / 3.5;

  noStroke();
  push();
  translate(this.position.x,this.position.y);
  rotate(theta);

  fill(209, 231, 249);  
  //wings
  beginShape();
  vertex(-18,1);
  vertex(18,1);
  vertex(18,-3);
  vertex(-18,-3);
  endShape(CLOSE);
 
//motor mount right (reversed)
  beginShape();
  vertex(-24,3);
  vertex(-18,3);
  vertex(-18,-4);
  vertex(-24,-4);
  endShape(CLOSE);
  
  
//motor mount left
  beginShape();
  vertex(24,3);
  vertex(18,3);
  vertex(18,-4);
  vertex(24,-4);
  endShape(CLOSE);

//propeller shaft right
  fill(255);
  beginShape();
  vertex(-22,3);
  vertex(-20,3);
  vertex(-20,7);
  vertex(-22,7);
  endShape(CLOSE);

//propeller shaft left
  beginShape();
  vertex(22,3);
  vertex(20,3);
  vertex(20,7);
  vertex(22,7);
  endShape(CLOSE);

//propeller right  
fill(123, 134, 226);
  beginShape();
  vertex(-12,7);
  vertex(-12,9);
  vertex(-30,9);
  vertex(-30,7);
  endShape(CLOSE);
  
//propeller left
  beginShape();
  vertex(12,7);
  vertex(12,9);
  vertex(30,9);
  vertex(30,7);
  endShape(CLOSE);
 
//body
  // fill(251,252, 208);
  fill(255);
  beginShape();
  vertex(-7,5);
  vertex(7,5);
  vertex(7,-5);
  vertex(-7,-5);
  endShape(CLOSE);  
  
  
  fill(196, 208, 245);
  //right leg
  beginShape();
  vertex(-7,-5);
  vertex(-2,-5);
  vertex(-10,-14);
  vertex(-10,-21);
  vertex(-14,-14);
  endShape(CLOSE);
  
  //left leg
  beginShape();
  vertex(7,-5);
  vertex(2,-5);
  vertex(10,-14);
  vertex(10,-21);
  vertex(14,-14);
  endShape(CLOSE);
  pop();
}

// Wraparound
Boid.prototype.borders = function() {
  if (this.position.x < -this.r)  this.position.x = width +this.r;
  if (this.position.y < -this.r)  this.position.y = height+this.r;
  if (this.position.x > width +this.r) this.position.x = -this.r;
  if (this.position.y > height+this.r) this.position.y = -this.r;
}

// Separation
// Method checks for nearby boids and steers away
Boid.prototype.separate = function(boids) {
  var desiredseparation = 35.0;
  var steer = createVector(0,0);
  var count = 0;
  // For every boid in the system, check if it's too close
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    // If the distance is greater than 0 and less than an arbitrary amount (0 when you are yourself)
    if ((d > 0) && (d < desiredseparation)) {
      // Calculate vector pointing away from neighbor
      var diff = p5.Vector.sub(this.position,boids[i].position);
      diff.normalize();
      diff.div(d);        // Weight by distance
      steer.add(diff);
      count++;            // Keep track of how many
    }
  }
  // Average -- divide by how many
  if (count > 0) {
    steer.div(count);
  }

  // As long as the vector is greater than 0
  if (steer.mag() > 0) {
    // Implement Reynolds: Steering = Desired - Velocity
    steer.normalize();
    steer.mult(this.maxspeed);
    steer.sub(this.velocity);
    steer.limit(this.maxforce);
  }
  return steer;
}

// Alignment
// For every nearby boid in the system, calculate the average velocity
Boid.prototype.align = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0,0);
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].velocity);
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    sum.normalize();
    sum.mult(this.maxspeed);
    var steer = p5.Vector.sub(sum,this.velocity);
    steer.limit(this.maxforce);
    return steer;
  } else {
    return createVector(0,0);
  }
}

// Cohesion
// For the average location (i.e. center) of all nearby boids, calculate steering vector towards that location
Boid.prototype.cohesion = function(boids) {
  var neighbordist = 50;
  var sum = createVector(0,0);   // Start with empty vector to accumulate all locations
  var count = 0;
  for (var i = 0; i < boids.length; i++) {
    var d = p5.Vector.dist(this.position,boids[i].position);
    if ((d > 0) && (d < neighbordist)) {
      sum.add(boids[i].position); // Add location
      count++;
    }
  }
  if (count > 0) {
    sum.div(count);
    return this.seek(sum);  // Steer towards the location
  } else {
    return createVector(0,0);
  }
}

