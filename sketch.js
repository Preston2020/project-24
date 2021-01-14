
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var engine, world,paper;
var leftdb,rightdb,bottomdb;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	
	paper = new Paper(100,300,10);
	leftdb = new Dustbin(550,640,20,100);
	bottomdb = new Dustbin(610,680,100,20);
	rightdb = new Dustbin(670,640,20,100);
	ground = new Ground(30,695,1600,15);

	Engine.run(engine);
 
}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);

  paper.display();
  leftdb.display();
  bottomdb.display();
  rightdb.display();
  ground.display();
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {
			x:12,
			y:-13
		})
	}
}



