class Layer {
    constructor(xposStart, xposEnd, ypos){
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
            var target = this.targets[i];
            target.display();
        }
        

    }
}