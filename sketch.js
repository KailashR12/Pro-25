
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}
var paperObject, dustbin1;
var dustbin2,dustbin3;
var ground;
function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paperObject = new Paper(50,690);
	dustbin1 = new Dustbin(600,615,150,150);
	//dustbin2 = new Dustbin(490,650,20,100);
	//dustbin3 = new Dustbin(310,650,20,100);
	ground = new Ground(600,height,1200,20);
	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(255);
  keyPressed();
  paperObject.display();
  dustbin1.display();
  //dustbin2.display();
  //dustbin3.display();
  ground.display();
	
//paperObject.collide(ground);
//dustbin1.collide(ground);
//dustbin2.collide(ground);
//dustbin3.collide(ground);

  drawSprites();
 
}
function keyPressed(){
	
	if (keyCode === UP_ARROW){
		
		Matter.Body.setVelocity(paperObject.body, {x:3,y:-3});

		//Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});

	}
	if (keyCode === DOWN_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:0,y:85});
	}
}

