class Layer {
    constructor(xposStart, xposEnd, ypos, n){
        this.targets = [];

        for (var i=xposStart;i<xposEnd;i=i+20){
            let randomizer = [ "violet", "indigo", "blue", "green", "yellow", "orange", "red"] 
            let color = random(randomizer);
            var target = new Box(i,ypos,color);
            this.targets.push(target);
          }
    }
    display(){
        for (var i=0;i<this.targets.length;i++){
            this.targets[i].display();
        }
        

    }
}