
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var left,right;

function preload()
{
	
}

function setup() {
	createCanvas(900, 900);


	engine = Engine.create();
	world = engine.world;

	fill(255);
	ball=Bodies.circle(270,550,30);
    World.add(world,ball);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2,
	}

	groundObj =new Ground(450,890,900,20);
	right = new Ground(800,800,20,160);
	left = new Ground(550,800,20,160);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,20);
  
  left.show();
  groundObj.show();
  right.show();

  if(ball.x>570 && ball.x<800)
  {
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0})
  }

  
  if(ball.x<800)
  {
	  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:0})
  }

  Engine.update(engine)
}

function keyPressed()
{
	if(keyCode===UP_ARROW)
	{
		Matter.Body.applyForce(ball,{x:0,y:0},{x:0.1,y:-0.13})
        
	}
}


