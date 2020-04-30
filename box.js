class Box {
    constructor(x,y,angle){
        this.x = x;
        this.y = y;
        
        var option = {
            restitution:0.1,
            density:0.2
        }
        this.body = Bodies.rectangle(this.x,this.y,20,40,option);
        Matter.Body.setAngle(this.body,angle);
        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle);

        fill(200);
        rectMode(CENTER);
        rect(0,0,20,50);
        pop();
    }   
}