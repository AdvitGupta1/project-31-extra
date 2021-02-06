class Drops{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,r,options);
        World.add(world,this.body);
    }

    display(){
        var pos=this.body.position
        push()  
        //if(this.body.position.y>height){
            Matter.Body.setPosition(this.body, {x:random(0,800), y:random(0,700)})
      //  }
        fill("blue")
        ellipse(pos.x,pos.y,this.r,this.r);
        pop()
    }
}
