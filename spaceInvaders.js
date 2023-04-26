/*
Make a sprite at the bottom of the canvas that shoots a "bullet" upwards. 
Make falling sprites that must be hit with bullets to dissappear.
Take away a life if the falling sprite is not gone before it hits the bottom of the canvas
*/

/*
Global variables/arrays:
invaderList = [];
bulletList = [];
collisionDist = 5;
*/

/*
TO DO:
(GamePlay)
- Keep track of points when bullets hit invaders
- Display start screen and game over screen
- Make more levels
-----------
(Graphics)
- make shooter look more like a spaceship
- make invader look more like alien
- make explosion when invader and bullet collide
*/


function setup() {
  createCanvas(400, 400);
  
  /*
  Create a single instance of the shooter at bottom of canvas:
  let myShooter = new Shooter(200, 360);
  
  create a single starting invader as soon as sketch is played:
  invaderList.push(new Invader(random(width), 0, random(1,5)));
  */
  
}

function draw() {
  background(220);
  
  /*
  update and show sprites:

  myShooter.update();
  myShooter.show();
  
  loop through list of bullets and invaders to check for overlap or exceeding canvas. when they overlap or exceed canvas, splice them both out of their respective arrays
  
  check for overlap using collision function
  */
  
}


class Shooter {
  /*
  constructor(...){
  - Give sprite x and y coordinates near bottom middle of canvas
  }
  
  update(){
  - use keyPressed function to move left and right at bottom of canvas
  }
  
  show(){
  - make the shooter look like a little box with a little gun attached to it
  }
  */
}

class Bullet {
  /*
  constructor(...){
  - give bullets x and y coordinates starting from our shooter with the same speed for each
  }
  
  shoot(){
  - move bullets upwards towards invaders at constant speed
  }
  
  show(){
  - make bullets look like little squares of the same size
  }
  */
}

class Invader {
  /*
  constructor(...){
  - give sprite x and y coordinates near top of canvas, and random speed
  }
  
  drop(){
  - when invader is spawned, add the speed to the y coordinate to show it dropping
  }
  
  show(){
  - make the invader look like a little boxes of same size
  }
  */
}

function keyPressed(){
  /*
  if right arrow key is pressed, increase x val of shooter
  if left arrow key is pressed, decrease x val of shooter
  if space is pressed, fire bullet
  */
}

function collision(bullet, invader){
  /*
  check if distance between bullet and invader is within a certain range and return true if it is, false if it isnt
  let collisionTest = dist(bullet.x, bullet.y, invader.x, invader.y);
  if (collistionTest < collisionDist){
    return true;
  } else {
  return false;
  }
  */
}
