class Block{
    constructor(x,y,w,h){
        var options={
            friction:3,
            restitution:0.05,
            density:2,
        }
        this.body=Bodies.rectangle(x,y,w,h,options);
        this.width=w;
        this.height=h;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        strokeWeight(4)
        stroke("black");
        fill("red")
        rect(0,0,this.width,this.height);
        pop();
    }

}