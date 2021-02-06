class Human{
    constructor(x,y){
        var options={
            isStatic:true,
            restitution:0.3,
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.image=loadImage("Walking Frame/walking_1.png");
        this.body=Bodies.rectangle(x,y,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        push()  
        imageMode(CENTER);
        image(this.image,this.x,this.y,400,400);
        pop()
    }
}
