var a , b ;
var car , wall ;


function setup() {
  createCanvas(800,400);
  a=createSprite(400, 200, 50, 50);
  a.shapeColor="green";
  b=createSprite(600,35,20,20);
  b.shapeColor="red";
  car=createSprite(550,250,50,50);
  car.shapeColor="blue";
  wall=createSprite(750,234,10,100);
  wall.shapeColor="cyan";
  car.velocityX=5;
}

function draw() {
  background(255,255,255);  
  drawSprites();
  b.x=World.mouseX;
  b.y=World.mouseY;
  if(isTouching(car,wall)){
  car.shapeColor="red";
 // car.velocityX=0;
 car.shapeColor="pink";
}
  else {
    
  car.shapeColor="blue";
  //a.shapecolor="green";
}
bounceOff();
}



