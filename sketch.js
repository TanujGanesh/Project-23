var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var box1,box2,box3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

  //  box1=new Boxes(400,650,250,20);
  //	box2=new Boxes(200,600,20,100);
  box1=Bodies.rectangle(400,650,250,20,{isStatic:true});
  World.add(world,box1);
  box2=Bodies.rectangle(275,610,20,100,{isStatic:true});
  World.add(world,box2);
  box3=Bodies.rectangle(525,610,20,100,{isStatic:true});
  World.add(world,box3);
}


function draw() { 
  Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 // box2.display(); 
 // box1.display();
 fill("red");
 rect(400,650,250,20);
 rect(265,610,20,100);
 rect(525,610,20,100);
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
	Body.setStatic( packageBody, false);
  }
  else if(keyCode === LEFT_ARROW){
	  helicopterSprite.x = helicopterSprite.x-20;
	  translation={x:-20,y:0}
	  Matter.Body.translate(packageBody,translation) 
  }
  else if(keyCode === RIGHT_ARROW){
	  helicopterSprite.x = helicopterSprite.x+20;
	  translation={x:20,y:0}
	  Matter.Body.translate(packageBody,translation)
  }
}



