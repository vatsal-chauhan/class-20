var fixedRect,movingRect;
function setup() {
  createCanvas(800,400);
 fixedRect=createSprite(400, 200, 50, 20);
 movingRect=createSprite(100,200,20,50);
}

function draw() {
  background(255,255,255);  

  movingRect.y=mouseY;
  movingRect.x=mouseX;

if(movingRect.x-fixedRect.x<=movingRect.width/2+fixedRect.width/2 && 
  fixedRect.x-movingRect.x<=movingRect.width/2+fixedRect.width/2 && 
  movingRect.y-fixedRect.y<=movingRect.height/2+fixedRect.height/2 && 
  fixedRect.y-movingRect.y<=movingRect.height/2+fixedRect.height/2){
    movingRect.shapeColor="red";
    fixedRect.shapeColor="red";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }



  drawSprites();
}