var rect1, rect2;

function setup() {
  createCanvas(800,400);

  rect1 = createSprite(600, 200, 50, 50);
  rect1.shapeColor = "red";
  rect1.velocityX = -3;
  //rect1.velocityY = -5;
  rect1.debug = true;

  rect2 = createSprite(200,200,50,50);
  rect2.shapeColor = "red";
  rect2.velocityX = 3;
  //rect2.velocityY = 5;
  rect2.debug = true;

}

function draw() {
  background("cyan");  
  drawSprites();

  //rect2.y = mouseY;
  //rect2.x = mouseX;

  console.log(rect2.x);

  if(rect2.x - rect1.x <= rect1.width / 2 + rect2.width / 2 && rect1.x - rect2.x <= rect1.width / 2 + rect2.width / 2 &&
    rect2.y - rect1.y <= rect1.height / 2 + rect2.height / 2 && rect1.y - rect2.y <= rect1.height / 2 + rect2.height / 2){
    rect2.shapeColor = "green";
    rect1.shapeColor = "green";
    //rect2.velocityY = -1 * rect2.velocityY;
  }
  else{
    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
  }

  if(rect2.x - rect1.x <= rect1.width / 2 + rect2.width / 2 && rect1.x - rect2.x <= rect1.width / 2 + rect2.width / 2){
    rect2.velocityX = -1 * rect2.velocityX;
    rect1.velocityX = -1 * rect1.velocityX;
  }

}