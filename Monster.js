class Monster{
    constructor(x,y,w,h){
        var monster_options={
            density:1,
            frictionAir:0.002
        }
        this.x = x;
        this.y = y;
        this.width = w;
        this.height = h
        this.image = loadImage("images/Monster-01.png");
        this.body = Bodies.rectangle(this.x,this.y, this.width, this.height, monster_options);
        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,pos.x,pos.y, this.width+100, this.height+100);
        pop();
    }
}