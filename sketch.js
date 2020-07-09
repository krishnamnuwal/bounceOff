var rect1,rect2;
function setup(){
  createCanvas(400,400);
  rect1=createSprite(30,200,40,60);
  rect2=createSprite(380,200,40,60);
  rect3=createSprite(200,20,40,60);
  rect4=createSprite(200,380,40,60);

  rect1.velocityX=+10;
  rect2.velocityX=-10;
  rect3.velocityY=+6;
  rect4.velocityY=-6;

  rect1.shapeColor="green";
  rect2.shapeColor="green";
  rect3.shapeColor="green";
  rect4.shapeColor="green";
 

}
function draw(){
background("white");
drawSprites();

if(bounceOff(rect1,rect2)){
  rect1.shapeColor="red";
  rect2.shapeColor="red";
  rect1.velocityX=rect1.velocityX*(-1);
  rect2.velocityX=rect2.velocityX*(-1);
}else if(bounceOff(rect3,rect4)){
   rect3.shapeColor="red";
  rect4.shapeColor="red";
  rect3.velocityY=rect3.velocityY*(-1);
  rect4.velocityY=rect4.velocityY*(-1);
}





}

function bounceOff(object1,object2){
  if(object1.x-object2.x<object2.width/2+object1.width/2&&object2.x-object1.x<object2.width/2+object1.width/2&&
    object2.y-object1.y<object2.height/2+object1.height/2&&object1.y-object2.y<object2.height/2+object1.height/2){
    return true
  }else {
    return false
  }

}














