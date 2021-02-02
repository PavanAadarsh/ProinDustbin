class paper{
constructor(x,y,width,height){
    var paperoption = {
        restitution:0.4,
        friction:0.6,
        density:0.24
    }
    this.body = Bodies.rectangle(x,y,width,height,paperoption);
    this.width = width;
    this.height = height;
    World.add(world,this.body)
}
display(){




    var pos = this.body.position;
    push();
    translate(pos.x,pos.y);
    fill("cyan")
    rectMode(CENTER)
    rect(0,0,this.width,this.height);
    pop();
}



}