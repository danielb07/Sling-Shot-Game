class Projectile {
    constructor(x,y){
        console.log("abc")
        var randomDensity = random(0.2,0.5)
        this.randomColor = random(["red","blue","purple"])
        var option = {
            restitution:0.4,
            density:randomDensity
        }

        this.body = Bodies.circle(x,y,30);
        this.x = x;
        this.y = y;
        World.add(world, this.body);
        
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        
        push();
        translate(pos.x,pos.y)
        rotate(angle);
        fill(this.randomColor);
        
        ellipse(0,0,25,25);
        pop();
    }
}