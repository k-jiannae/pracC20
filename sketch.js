var fixedRect, movingRect;
//const Engine = Matter.Engine;
//const World = Matter.World;
//const Bodies = Matter.Bodies;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 800);


//	engine = Engine.create();
//	world = engine.world;

	//Create the Bodies Here.

	fixedRect=createSprite(600,400,50,80);
	fixedRect.shapeColor ="green";
	fixedRect.debug=true;
	movingRect=createSprite(400,200,80,30);
	movingRect.shapeColor = "green";
	movingRect.debug = true;
//	Engine.run(engine);
  
}


function draw() {
  //rectMode(CENTER);
  background("yellow");
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  
  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  
	&& fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2
	&& movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2
	&& fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2)
	{
	  movingRect.shapedColor = "red";
	  fixedRect.shapeColor = "red";
  }
  else{
	movingRect.shapeColor = "green";
	fixedRect.shapeColor = "green";
}
 
  drawSprites();
 
}



