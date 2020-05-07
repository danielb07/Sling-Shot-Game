const  { Engine, World, Bodies, Constraint} = Matter;
var engine, world;
var projectile, catapult, ground1;
var wall;
var score = 0
var timer = 1000;
var pyramids = [];
var START = 0;
var END = 1;
var gameMode = START

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world; 
  projectile = new Projectile(200, 200);
  catapult = new Catapult(projectile.body,{x:200,y:100})
  ground1 = new Ground(400,390,800,20);
  ground2 = new Ground(595,169,200,20);
  wall = new Ground(797,200,20,400);

  target_pyramid1 = new Piramid(504, 688, 138,524, 673, 96,564, 644, 61,584, 605, 26)
  
  pyramids.push(target_pyramid1);
  target_pyramid2 = new Piramid(504, 693, 361,524, 673, 326,564,626,257,584, 605, 233)
  pyramids.push(target_pyramid2);
  target_pyramid3 = new Piramid(87, 270, 326,107, 255, 291,147, 227, 257);
  pyramids.push(target_pyramid3);
  
}
function draw() {
  background("#18181D");
  Engine.update(engine)
  if(gameMode===START){
    push();
  noStroke();
  textSize(20)
  fill("red");
  text("Score "+score,47,28)
  pop();

  push();
  noStroke();
  textSize(20)
  fill("red")
  text("TIMER:"+timer,650,28)
  pop();

  timer = timer-1;

  ground1.display();
  ground2.display();
  catapult.display();
  projectile.display();
  wall.display();
  for (var i=0;i<pyramids.length;i++){
    var target_pyramid = pyramids[i];
    target_pyramid.display();
  }


  for (var i=0;i<pyramids.length;i++){
    var target_pyramid = pyramids[i];
    for (var j=0;j<target_pyramid.target_layers.length; j++){
      var target_layer = target_pyramid.target_layers[j]
      for(var k=0;k<target_layer.targets.length;k++){ 
        var box = target_layer.targets[k];
          box.score();
      }
    }
  }
 if(timer<=0){
   gameMode=END;
 }
} 
else if(gameMode===END){
  noStroke();
  textSize(40);
  fill("red")
  text("GAME OVER",314,101)
  text("YOUR SCORE: "+score,188,184);
  
}

  }

  
  
function mouseDragged(){
  if(catapult.catapult.bodyA)
    Matter.Body.setPosition(projectile.body, {x: mouseX , y: mouseY});
}

function mouseReleased() {
  catapult.fly();
}

function keyPressed(){
  if(keyCode===32){
    projectile = new Projectile(200, 200);
    catapult.attach(projectile.body);
    Matter.Body.setPosition(projectile.body,{x:199,y:117})

  }
}
function mousePressed(){
  console.log(mouseX+","+mouseY);
}

