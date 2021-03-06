var ground;
var hammer;
var rock; 
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    ground.createSprite(400,50,400,20);
    ground = new(Ground);
	hammer.createSprite(mouseX,mouseY,70,20);
	hammer = new(Hammer);
	rock.createSprite(50,380,20,20);
	Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 ground.display();
 hammer.display();
 rock.display();
}



