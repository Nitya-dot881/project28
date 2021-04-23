const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint

var engine, world;
var paper,ground,slingshot;

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
   ground=new Ground(400,590,1000,20)
  
  
	//Create the Bodies Here.
	paper=new PAPER(300,100,60,60)
     rect1=new DUSTBIN(600,568,80,100)
    
     slingshot = new SlingShot(paper.body,{x:200, y:50});
     
	//rect1.scale=10
	Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  Engine.update(engine);
  paper.display()
  ground.display()
  rect1.display()

 
slingshot.display()
  drawSprites();
 
}



  function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
    Matter.Body.applyForce(paper.body,paper.position,{x:60,y:-80} )
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){
    if(keyCode===32)
    slingshot.attach(paper.body);
}


