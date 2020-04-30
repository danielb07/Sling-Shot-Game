class Projectile {
    constructor(x,y){
        var option = {
            restitution:0.4,
            density:0.2
        }

        this.body = Bodies.circle(x,y,50);
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

        fill("ffffff");
        ellipse(0,0,50,50);
        pop();
    }
}