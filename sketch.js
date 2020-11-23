var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 50);
  fixedRect.shapeColor = "purple";
  movingRect = createSprite(500,200,30,80);
  movingRect.shapeColor = "blue";

  fixedRect.velocityX = 2;
  movingRect.velocityX = -2;
}

function draw() {
  background(255,255,255);
  
  /*
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2
    ){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  else{
    fixedRect.shapeColor = "purple";
    movingRect.shapeColor = "blue";
  }
  */

 if(movingRect.x - fixedRect.x <= fixedRect.width/2 + movingRect.width/2 &&
    fixedRect.x - movingRect.x <= fixedRect.width/2 + movingRect.width/2){
      fixedRect.velocityX = fixedRect.velocityX * (-1);
      movingRect.velocityX = movingRect.velocityX * (-1);
    }
 if(movingRect.y - fixedRect.y <= fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y <= fixedRect.height/2 + movingRect.height/2
    ){
    fixedRect.velocityY = fixedRect.velocityY * (-1);
    movingRect.velocityY = movingRect.velocityY * (-1);
  }
  
  drawSprites();
}