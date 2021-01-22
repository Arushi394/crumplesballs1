
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

	box1 = new Box(480,600,20,100) 
	box2 = new Box(340,660,300,20)
	box3 = new Box(200,600,20,100)

	paper = new Paper(20,600,20)
    ground = new Ground(400,700,800,20)

	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);

  paper.display()
  ground.display()
  box1.display()
  box2.display()
  box3.display()

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-150});
	}
}



