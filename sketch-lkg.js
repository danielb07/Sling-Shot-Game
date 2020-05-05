
// CREATE GLOBAL VARIABLES
// For Engine, World, Bodies and any other that you have in mind to make your coding life easier.
// remember to create an array of boxes.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var gSlider;
 
var target1, target2;
function setup() {
    createCanvas(800, 400);

    // Create an instance of Engine, World
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(400,390,800,20);
    target2 = new Box(471,355);
    target1 = new Box(471,355 - target2.height);
    

}
 
function mouseClicked() {
    console.log(mouseX + "," + mouseY)
    if (mouseY < 350) {
    // boxes created between random size 10 - 100
        random_width = random(10, 100);
        random_height = random(10, 100);
        // a box is spawned at the mouse click
        var box = new Box(mouseX,mouseY,random_width,random_height);
        boxes.push(box);
    }    
}
 
function draw() {
    Engine.update(engine);
    // Draw all the elements including the slider that 
    background(200);
    ground.display();
    target1.display();
    target2.display();
}
