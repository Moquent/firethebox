const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var box1, box2, box3, box4, box5, box6, box7, box8, box9, box0;
var sling, holder, ball;
var ground, engine, world, backgroundImg;
var gamestate = "onsling";

function preload(){
  backgroundImg = loadImage("sprites/bg.png");
}

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new Box(900, 370);
  box2 = new Box(919, 370);
  box3 = new Box(938, 370);
  box4 = new Box(957, 370);
  box5 = new Box(909, 340);
  box6 = new Box(928, 340);
  box7 = new Box(947, 340);
  box8 = new Box(918, 310);
  box9 = new Box(937, 310);
  box0 = new Box(927, 280);

  ball = new Ball({isStatic: false});

  ground = new Ground(600,height,1200,20);
  World.add(world, ground);

  sling = new Sling(ball.body, {x:200, y:100});
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box0.display();

  ball.display();

  sling.display();

  fill("white");
  rectMode(CENTER);
  rect(200, 100, 20, 20);

  ground.display();

  drawSprites();
}

function mouseDragged(){
  if(gamestate != "launch"){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
  }
}


function mouseReleased(){
  sling.fly();
  gamestate = "launch";
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(ball.body);
    gamestate = "onsling";
  }
}