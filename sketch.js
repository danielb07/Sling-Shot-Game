const  { Engine, World, Bodies, Constraint} = Matter;
var engine, world;
var projectile, catapult, ground1;
var wall;
var target_layer1;
var target_layer2;
var target_layer3
var target_layer4;
var target_layer5;
var target_layer6;
var target_layer7;
var target_layer8;
var target_layer9;
var target_layer10;
var target_layer11;
var target_layer12;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
  projectile = new Projectile(200, 200);
  catapult = new Catapult(projectile.body,{x:200,y:100})
  ground1 = new Ground(400,390,800,20);
  ground2 = new Ground(595,169,200,20);
  wall = new Ground(797,200,20,400);

  target_layer1 = new Layer(504, 688, 138);
  target_layer2 = new Layer(524, 673, 96);
  target_layer3 = new Layer(564, 644, 61);
  target_layer4 = new Layer(584, 605, 26);
  target_layer5 = new Layer(504, 693, 361);
  target_layer6 = new Layer(524, 673, 326);
  target_layer7 = new Layer(564,626, 257);
  target_layer8 = new Layer(584, 605, 233);
  target_layer9 = new Layer(87, 270, 326);
  target_layer10 = new Layer(107, 255, 291);
  target_layer11 = new Layer(147, 227, 257);
}
function draw() {
  background("#18181D");
  Engine.update(engine)
  ground1.display();
  ground2.display();
  catapult.display();
  projectile.display();
  wall.display();
  target_layer1.display();
  target_layer2.display();
  target_layer3.display();
  target_layer4.display();
  target_layer5.display();
  target_layer6.display();
  target_layer7.display();
  target_layer8.display();
  target_layer9.display();
  target_layer10.display();
  target_layer11.display();
}

function mouseDragged(){
  
  Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  catapult.fly();
}

function keyPressed(){
  if(keyCode===32){
    catapult.attach(projectile.body);
    Matter.Body.setPosition(projectile.body,{x:199,y:117})
  }

}