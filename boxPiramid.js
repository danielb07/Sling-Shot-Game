class Piramid {
    constructor(x1start,x1end,y1,x2start,x2end,y2,x3start,x3end,y3,x4start,x4end,y4){
        this.target_layers = [];
       var target_layer1 = new Layer(x1start,x1end,y1);
       this.target_layers.push(target_layer1)
       var target_layer2 = new Layer(x2start,x2end,y2);
        this. target_layers.push(target_layer2)
        var target_layer3 = new Layer(x3start,x3end,y3);
       this.target_layers.push(target_layer3)
        
        var target_layer4 = new Layer(x4start,x4end,y4);
       this.target_layers.push(target_layer4)
        
    }
    display(){
        for(var i=0;i<this.target_layers.length;i++){
            var target_layer = this.target_layers[i];
            target_layer.display();
        }
    }

}