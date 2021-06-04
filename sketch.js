const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1;


function setup() {
  createCanvas(1000,600);


  engine = Engine.create();
  world = engine.world;
  Ground = new ground(390,495,210,20);


  Attacker = new attacker(150,300,30);
   
  block1 = new block(300,450,30,40);
  block2 = new block(330,450,30,40);
  block3 = new block(360,450,30,40);
  block4 = new block(390,450,30,40);
  block5 = new block(420,450,30,40);
  block6 = new block(450,450,30,40);
  block7 = new block(480,450,30,40);
  //first floor:
  block8 = new block(330,410,30,40);
  block9 = new block(360,410,30,40);
  block10 = new block(390,410,30,40);
  block11 = new block(420,410,30,40);
  block12 = new block(450,410,30,40);
  //third floor:
  block13 = new block(360,370,30,40);
  block14 = new block(390,370,30,40);
  block15 = new block(420,370,30,40);
  //top floor:
  block16 = new block(390,330,30,40);


  
  //2ground:
  Ground2 = new ground(690,195,210,20);
  //2ground floor:
  blocka = new block(600,150,30,40);
  blockb = new block(630,150,30,40);
  blockc = new block(660,150,30,40);
  blockd = new block(690,150,30,40);
  blocke = new block(720,150,30,40);
  blockf = new block(750,150,30,40);
  blockg = new block(780,150,30,40);
  //2first floor:
  blockh = new block(630,110,30,40);
  blocki = new block(660,110,30,40);
  blockj = new block(690,110,30,40);
  blockk = new block(720,110,30,40);
  blockl = new block(750,110,30,40);
  //2third floor:
  blockm = new block(660,70,30,40);
  blockn = new block(690,70,30,40);
  blocko = new block(720,70,30,40);
  //2top floor:
  blockp = new block(690,30,30,40);

    Slingshot = new SlingShot(Attacker.body,{x:100, y:300});

}

function draw() {
  background("#34282C");  
  Engine.update(engine);
    strokeWeight(4);
Ground.display();
Attacker.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    textSize(20);
    text("Drag the Hexagonal stone and release it, to launch it towards the blocks",200 ,300);

Ground2.display();
blocka.display();
blockb.display();
blockc.display();
blockd.display();
blocke.display();
blockf.display();
blockg.display();
blockh.display();
blocki.display();
blockj.display();
blockk.display();
blockl.display();
blockm.display();
blockn.display();
blocko.display();
blockp.display();

    Slingshot.display();

}

function mouseDragged(){
  Matter.Body.setPosition(Attacker.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  Slingshot.fly();
}

function keyPressed(){
  if(keyCode === 32){
    Slingshot.attach(Attacker.body);
  }
}
