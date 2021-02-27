const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var bgImage;

function preload() {
  bgImage = loadImage("images/GamingBackground.png");
}

function setup() {
  createCanvas(1200, 800);
  engine = Engine.create();
  world = engine.world;
  //create Bodies here
  ground = new Ground(400,500,800,20);
  hero = new Hero(100,50,200,200);
  monster = new Monster(750,450,50,100);
  rope = new Fly(hero.body,{x:100,y:50});
  block1 = new Block(350,375,50,50);
  block2 = new Block(350,350,50,50);
  block3 = new Block(350,325,50,50);
  block4 = new Block(350,300,50,50);
  block5 = new Block(350,275,50,50);
  block6 = new Block(350,250,50,50);
  block7 = new Block(350,225,50,50);
  block8 = new Block(380,375,50,50);
  block9 = new Block(380,350,50,50);
  block10 = new Block(380,325,50,50);
  block11 = new Block(380,300,50,50);
  block12 = new Block(380,275,50,50);
  block13= new Block(380,250,50,50);
  block14 = new Block(380,225,50,50);


  Engine.run(engine);
}

function draw() {
  background(bgImage);
  //display Bodies here

  ground.display();
  hero.display();
  rope.display();
  monster.display();
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

  Engine.update(engine);
}
function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY});
}

