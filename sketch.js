const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;

function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  stand1 = new Stand(496,300,300,10);
  stand2 = new Stand(980,345,300,10);
 
  //level one
  block1 = new Block(510,275,30,40);
  block2 = new Block(540,275,30,40);
  block3 = new Block(570,275,30,40);
  block4 = new Block(420,275,30,40);
  block5 = new Block(450,275,30,40);
  block6 = new Block(480,275,30,40);
  block7 = new Block(450,100,30,40);
  block8 = new Block(490,100,30,40);
  block9 = new Block(530,100,30,40);
  log1 = new Log(390,130,25,100);
  log2 = new Log(600,130,25,100);
  log3 = new Log(495,40,350,25);

  //level two
  blockA = new Block2(870,100,20,120);
  blockB = new Block2(900,100,20,120);
  blockC = new Block2(930,100,20,120);

  blockD = new Block2(970,335,30,30);
  blockE = new Block2(1000,335,30,30);
  blockF = new Block2(1030,335,30,30);
  blockG = new Block2(1060,335,30,30);
  blockH = new Block2(1090,335,30,30);

  blockI = new Block2(985,285,30,30);
  blockJ = new Block2(1015,285,30,30);
  blockK = new Block2(1045,285,30,30);
  blockL = new Block2(1075,285,30,30);

  blockM = new Block2(995,245,30,30);
  blockN = new Block2(1025,245,30,30);
  blockO = new Block2(1055,245,30,30); 

  blockP = new Block2(1010,215,30,30);
  blockQ = new Block2(1045,215,30,30);

  blockR = new Block2(1030,180,30,30);


 var options={
   frictionAir:0.005
 } 
 ball= Bodies.circle(50,40,40,options);
 World.add(world,ball);
 slingshot=new SlingShot(this.ball,{x:100,y:150});  
  

  
  

  

}
function draw() {
  background(10,44,44); 
 
  
 
  slingshot.display();
  imageMode(CENTER);
  image(polygon_img,ball.position.x,ball.position.y,70,70);

  ground.display();
  stand1.display();
  stand2.display();
  
  strokeWeight(5);
  stroke("darkblue");
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  strokeWeight(5);
  stroke("darkblue");
  fill("pink");
  block7.display();
  block8.display();
  block9.display();
  strokeWeight(5);
  stroke("orange");
  fill("red");
  log1.display();
  log2.display();
  log3.display();

   
  strokeWeight(5);
  stroke('green')
  fill('lightgreen')
  blockA.display();
  blockB.display();
  blockC.display();

  strokeWeight(5);
  stroke("aqua");
  fill("black");
  blockD.display();
  blockE.display();
  blockF.display();
  blockG.display();
  blockH.display();
  blockI.display();
  blockJ.display();
  blockK.display();
  blockL.display();
  blockM.display();
  blockN.display();
  blockO.display();
  blockP.display();
  blockQ.display();
  blockR.display();
  
  

  
  

}


function mouseDragged(){


    
  Matter.Body.setPosition(ball, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
}
