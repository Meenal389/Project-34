
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var world;
var bob1,bob2,bob3,bob4,bob5;
var roof;
var R1,R2,R3,R4,R5;

function setup() {
	createCanvas(windowWidth/2,windowHeight/2);
	engine = Engine.create();
	world = engine.world;
	
	 bob1=new Bob(210,250,25);
	 bob2=new Bob(260,250,25);
	 bob3=new Bob(310,250,25);
	 bob4=new Bob(360,250,25);
	 bob5=new Bob(410,250,25);

	 roof=new Roof(310,50,400,100);
	
	 diameter=50;

	 R1=new Rope(bob1.body,roof.body,-diameter*2,0);
	 R2=new Rope(bob2.body,roof.body,-diameter*1,0);
	 R3=new Rope(bob3.body,roof.body,0,0);
	 R4=new Rope(bob4.body,roof.body,diameter*1,0);
	 R5=new Rope(bob5.body,roof.body,diameter*2,0);

	Engine.run(engine);
  
	var render = Render.create({
		element: document.body,
		engine: engine,
		options: {
		  width: 1200,
		  height: 700,
		  wireframes: false
		}
	  });

	  Render.run(render)

	
}

//----------------------------------------------------------------------------------------------------------------------//

function draw() {
  rectMode(CENTER);
  background("lightblue");
  
  roof.display()
  R1.display() 
  R2.display()
  R3.display()
  R4.display()
  R5.display()
  bob1.display()
  bob2.display()
  bob3.display()
  bob4.display()
  bob5.display()
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob5.body,{x:mouseX,y:mouseY})
}
