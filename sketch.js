
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var tree1,boy1,sling,stone1;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);



	engine = Engine.create();
	world = engine.world;


	tree1 = new tree();
	boy1 = new boy();
	stone1 = new stone(217,560)
	
	sling = new thro(stone1.body,{x:217,y:560})
  
}


function draw() {


	Engine.update(engine);

  rectMode(CENTER);
  background(0);


 

  tree1.display();
  boy1.display();
  stone1.display();

  sling.display();
  drawSprites();
 
}


function mouseDragged(){

Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}

function mouseReleased(){
    sling.fly();
}



