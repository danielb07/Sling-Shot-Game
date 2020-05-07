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
        this.visibility = 255;
    }
    display(){
        if (this.body.speed >=5){
            World.remove(world,this.body);
            push();
            this.visibility = this.visibility-5
            tint(255,this.visibility)
            pop();
          } 
        else{
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
    score(){
        if(this.visibility==0){
            score++;
        }
    }
}
    
   

