
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground,box1,box2,box3,paper1,paperImg,bin
function preload()
{
//	binImg= loadImage("images/dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	
   box1= new Box(1200,650)
  
   paper1= new Paper (200,600,40)
   //paper1.addAnimation(paperImg)
   groundSprite=createSprite(width/2, height-25, width,10);
    groundSprite.shapeColor=color(255)
   // bin= createSprite(1200,650)
   // bin.addAnimation("bin",binImg)
	//Create the Bodies Here.
   ground= Bodies.rectangle(width/2,600,width,10,{isStatic:true});
   World.add(world,ground);
   var render = Render.create({
	  element: document.body,
	  engine: engine,
	  options: {
	    width: 1200,
	    height: 700,
	    wireframes: false
	  }
	});


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  paper1.display();


  drawSprites();
 
}


function keyPressed(){
  if (keyCode === UP_ARROW){

  Matter.Body.applyForce(paper1.body,paper1.body.position,{x:85,y:-85});

  }


}
