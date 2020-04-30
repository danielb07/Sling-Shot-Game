const  { Engine, World,Bodies,Constraint} = Matter;
var engine, world;
var projectile, catapult, box,ground1;
var target1, target2;
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
  projectile = new Projectile(200, 200);
  catapult = new Catapult(projectile.body,{x:200,y:100})
  ground1 = new GROUND(400,390,800);
  target1 = new Box(478,44);
  target2 = new Box(471,370);
  
}
function draw() {
  background("#18181D");
  Engine.update(engine)
  catapult.display();
  projectile.display();
  ground1.display();
  target1.display();
  target2.display();
  drawSprites();
}
function mouseDragged(){
  // Matter.Body.setPosition(projectile.body,{x:200,y:100})
  Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
}
function mouseReleased() {
  catapult.fly();
}
function mouseClicked(){
  console.log(mouseX+","+mouseY);
}