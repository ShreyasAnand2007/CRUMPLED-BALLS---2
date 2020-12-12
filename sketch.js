 const Engine = Matter.Engine;
 const World = Matter.World;
 const Bodies = Matter.Bodies;
 const Body = Matter.Body;

 var paper,ground,binSide1,binSide2,binBase,binImg,bin;

function preload(){
	binImg = loadImage("Images/dustbingreen.png");
}

function setup() {
	 createCanvas(1200,600);
  
	 engine = Engine.create();
	 world = engine.world;

	 paper = new Paper();

     ground = new Ground(600,590,1200,15);
     bin = createSprite(964,520,20,20);
    bin.addImage(binImg);
    bin.scale = 0.45;
    
	  binSide1 = new Dustbin(902,505,10,120);
    binBase = new Dustbin(962,565,130,10);
    binSide2 = new Dustbin(1024,505,10,120);
	
	 Engine.run(engine);  
  
}


function draw() {

  rectMode(CENTER);
  background(0);

  Engine.update(engine);

  paper.display();
  ground.display();
  binSide1.display();
  binSide2.display();
  binBase.display();

  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW)  {
	   Matter.Body.applyForce(paper.body, paper.body.position,{x:74, y: -75})
	}

  }
