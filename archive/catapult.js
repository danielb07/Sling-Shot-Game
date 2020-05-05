class Catapult{
    constructor(bodyA,pointB){
        var options = {
            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.catapult = Constraint.create(options);
        World.add(world,this.catapult);
    }
    fly(){
        this.catapult.bodyA = null;
    }
    attach(body){
        this.catapult.bodyA = body;
    }
    display(){
        if(this.catapult.bodyA){
            var pointA = this.catapult.bodyA.position;
            var pointB = this.pointB
            push();
            strokeWeight(4)
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y);
            pop();
        }
    }
    
}