/*
Make a spaceship sprite at the middle of the canvas that shoots a "bullet" out of the direction it's facing. 
Make meteor sprites that must be hit with bullets to break into smaller ones.
*/

/*
Global variables/arrays:
largeMeteorList = [];
smallMeteorList = [];
bulletList = [];
collisionDist = 10;
*/

/*
TO DO:
(GamePlay)
- Keep track of points when bullets hit meteors
- Make spaceship sprite lose points if they are hit by meteor?
- Make more levels
-----------
(Graphics)
- make spaceship sprite look more like a spaceship
- make meteor look more like a meteor (colors, shape?)
- make explosion when meteor and bullet collide
*/


function setup() {
  createCanvas(400, 400);
  
  /*
  Create a single instance of the ship at middle of canvas:
  let myShip = new Ship(200, 200);
  
  create a many large meteors to start:
  for(let i = 0; i < 10; i++){
  largeMeteorList.push(new Meteor(random(width), random(length), random(5, 10));
  }
  */
  
}

function draw() {
  background(220);
  
  /*
  update and show sprites:

  myShip.update();
  myShip.show();
  
  loop through list of bullets and large meteors to check for overlap using collision function. when they overlap splice them both out of their respective arrays
  
  if overlap detected for LARGE meteors, splice from array and spawn 2 smaller meteors (smaller size, added to smallMeteorList)
  
  loop through list of bullets and small meteors to check for overlap using collision function. when they overlap splice them both out of their respective arrays, do not spawn more small meteors
  */
  
}


class Ship {
  /*
  constructor(...){
  - Give sprite x and y coordinates at middle of canvas, and rotation
  }
  
  update(){
  - use keyPressed function to rotate sprite and move forward
  }
  
  show(){
  - make the shooter look like an isosceles triangle
  }
  */
}

class Bullet {
  /*
  constructor(...){
  - give bullets x and y coordinates starting from our shooter with the same speed for each
  }
  
  shoot(){
  - move bullets forwards towards invaders at constant speed
  }
  
  show(){
  - make bullets look like little squares of the same size
  }
  */
}

class Meteor {
  /*
  constructor(...){
  - give sprite x and y coordinates anywhere on canvas, and random speed
  }
  
  update(){
  - move meteor slowly in one direction across canvas
  }
  
  show(){
  - make array of shapes? little ellipses? rects?
  }
  */
}

function keyPressed(){
  /*
  if right arrow key is pressed, add positive rotation to ship
  if left arrow key is pressed, add negative rotation to ship
  if up arrow key is pressed, move ship forward
  if space is pressed, fire bullet
  */
}

function collision(bullet, meteor){
  /*
  check if distance between bullet and meteor is within a certain range and return true if it is, false if it isnt
  let collisionTest = dist(bullet.x, bullet.y, meteor.x, meteor.y);
  if (collistionTest < collisionDist){
    return true;
  } else {
    return false;
  }
  */
}
