
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roofObject =new Roof(150,100,100,30);
	World.add(world,roofObject);
	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=height/4+500;
	bobObject1=new Bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new Bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new Bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new Bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new Bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);

	rope1=new Rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0);
	rope2=new Rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0);
	rope3=new Rope(bobObject3.body,roofObject.body,0, 0);
	rope4=new Rope(bobObject4.body,roofObject.body,bobDiameter*1, 0);
	rope5=new Rope(bobObject5.body,roofObject.body,bobDiameter*2, 0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  
  bobObject1.display();  
  bobObject2.display(); 
  bobObject3.display();
  bobObject4 .display();
  bobObject5 .display();

  rope1.display(); 
  rope2.display();  
  rope3 .display(); 
  rope4 .display(); 
  rope5 .display(); 
 
  roofObject.display();
}
function keyPressed(){
if(keyCode === 32 ){
	Matter.Body.applyforce(bob.Object1.body,bobObject2.body.positions,{x:-730,y:0});
}
}
function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}
