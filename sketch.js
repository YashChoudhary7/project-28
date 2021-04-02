
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var rope;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1100,180,30);
	mango3=new mango(990,250,30);
	mango6=new mango(950,170,30);
	mango4=new mango(1000,70,30);
	mango5=new mango(1200,100,30);
	mango7=new mango(1250,220,30);
	mango8=new mango(1170,170,30);
	mango9=new mango(1030,180,30);
    stoneObj=new pebble(230,410,30);
	

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	rope = new xyz(stoneObj.body,{x:230,y:410});
	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  rope.display();
stoneObj.display();
  groundObject.display();
  
}



function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
    rope.fly();
}