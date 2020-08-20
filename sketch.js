
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var bob1,bob2,bob3,bob4,bob5;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	 roof = new Roof(395,270,315,30);
	 bob1 = new Bob(300,500,30);
	 bob2 = new Bob(350,500,30);
	 bob3 = new Bob(400,500,30);
	 bob4 = new Bob(450,500,30);
	 bob5 = new Bob(500,500,30);
	// rope = new Rope(bob1.body,roof.body,-bob1Diameter*2, 0)
	 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(240);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
 // rope.display();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === LEFT_ARROW){
	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:85,y:-85});
	  
	}
}
