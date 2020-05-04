class GROUND {
    constructor(x,y,w){
        var options = {
            isStatic:true
        }
        
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = 20;

    this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        fill("red")
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height)
        pop();
    }
}