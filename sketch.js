var mobj,fobj;
var obj,fobj1;
var box1,box2;
function setup () {
  createCanvas (800,400);
  mobj = createSprite(500,200,100,50);
  fobj = createSprite(200,200,50,100);
  fobj.shapeColor="green";
  mobj.shapeColor="green";
  
  obj = createSprite(100,200,50,100);
  fobj1 = createSprite(300,200,50,100);
  obj.shapeColor="green";
  fobj1.shapeColor="green";
  box1 = createSprite(100,300,50,50);
  box2 = createSprite(500,300,50,50);
  box1.velocityX=2;
  box2.velocityX=-2;
}
function draw() {

  background(255,255,255); 
  
  mobj.x=mouseX;
  mobj.y=mouseY;
  console.log(mobj.width/2+fobj.width/2);
  console.log(mobj.x-fobj.x);
  
 if( isTouching(mobj,fobj1)){
  fobj1.shapeColor="red";
        mobj.shapeColor="red";
      }
      else{
        fobj1.shapeColor="green";
      mobj.shapeColor="green";
      }
      bounceOff(box1,box2);
  drawSprites();
}