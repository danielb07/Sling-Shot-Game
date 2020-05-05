const  { Engine, World, Bodies, Constraint} = Matter;
var engine, world;
var projectile, catapult, ground1;
var wall;
var target1, target2,target3;
var target_layer1 = [];
var target_layer2 = [];
var target_layer3 = [];
var target_layer4 = [];
var target_layer5 = [];
var target_layer6 = [];
var target_layer7 = [];
var target_layer8 = [];

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
  projectile = new Projectile(200, 200);
  catapult = new Catapult(projectile.body,{x:200,y:100})
  ground1 = new Ground(400,390,800,20);
  ground2 = new Ground(595,169,200,20);
  wall = new Ground(797,200,20,400)
  
  for (var i=504;i<693;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target1 = new Box(i,138,color);
    
    target_layer1.push(target1);
  }

  for (var i=524;i<673;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target2 = new Box(i,96,color);
    target_layer2.push(target2);
  }

  for (var i=564;i<644;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target3 = new Box(i,61,color);
    target_layer3.push(target3);
  }

  for (var i=584;i<605;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target4 = new Box(i,26,color);
    target_layer4.push(target4);
  }

  for (var i=504;i<693;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target5 = new Box(i,361,color);
    
    target_layer5.push(target5);
  }
  for (var i=524;i<673;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target6 = new Box(i,326,color);
    target_layer6.push(target6);
  }

  for (var i=564;i<644;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target7 = new Box(i,291,color);
    target_layer7.push(target7);
  }
  for (var i=584;i<605;i=i+20){
    let randomizer = [ "blue", "purple","yellow","green"] 
    let color = random(randomizer);
    target8 = new Box(i,257,color);
    target_layer8.push(target8);
  }
  
}
function draw() {
  background("#18181D");
  Engine.update(engine)
  ground1.display();
  ground2.display();
  catapult.display();
  projectile.display();
  wall.display();
  
  for(var i=0;i<target_layer1.length;i++){
    target_layer1[i].display();
  }
  for(var i=0;i<target_layer2.length;i++){
    target_layer2[i].display();
  }
  for(var i=0;i<target_layer3.length;i++){
    target_layer3[i].display();
  }
  for(var i=0;i<target_layer4.length;i++){
    target_layer4[i].display();
  }
  for(var i=0;i<target_layer5.length;i++){
    target_layer5[i].display();
  }
  for(var i=0;i<target_layer6.length;i++){
    target_layer6[i].display();
  }
  for(var i=0;i<target_layer7.length;i++){
    target_layer7[i].display();
  }
  for(var i=0;i<target_layer8.length;i++){
    target_layer8[i].display();
  }
}
// function LayerOfBoxes(firstboxxpos, numofboxes){
//   for (var i=0;i<n;i++){
//     var xpos = 471;
//     var ypos = 355;
//     // target = new Box(xpos, ypos);
//     // target.display();
//   }
// }


function mouseDragged(){
  
  Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
}
function mouseReleased() {
  catapult.fly();
}
function mouseClicked(){
  console.log(mouseX+","+mouseY);
  
}
function keyPressed(){
  if(keyCode===32){
    catapult.attach(projectile.body);
    Matter.Body.setPosition(projectile.body,{x:199,y:117})
  }

}