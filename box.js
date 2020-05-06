class Box {
    constructor(x,y,c){
        var options = {
            restitution:0.2,
            // friction:0.1,
            // density:1.0
        }
        this.width = 15;
        this.height = 35;
        this.color = c;
        this.body = Bodies.rectangle(x,y,this.width,this.height,options);
        World.add(world,this.body);
    }
    display(){
        fill("red")
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER);
        fill(this.color)
        rect(0,0,this.width,this.height);
        pop();
    }

}

