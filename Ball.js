class Ball{
    constructor(x,y,r){
var options={
    isStatic:false,
    resitution:2.0,
    friction:1.0,
    density:9.0
}
this.x =x;
this.y=y;
this.r=r;
this.body=Bodies.circle(this.x,this.y,this.r/2,options)
World.add(world,this.body);
    }

    display(){
       // var paperpos=this.body.position;
        push()
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER)
        strokeWeight(3);
        fill("magenta")
        ellipse(0,0,this.r,this.r);
        pop();
    }
}