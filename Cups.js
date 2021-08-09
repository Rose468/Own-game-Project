class Cups
{
    constructor(x,y,width,height)
    {
        var option={
            'restitution' : 0.5,
            'friction': 1.0,
            'density': 3
        }
        this.body=Bodies.rectangle(x,y,width,height,option);
        World.add(world,this.body);
        
        this.width=width;
        this.height=height;
    }

    display()
    {
//console.log(this.body)



        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("white");
        rect(0,0,this.width,this.height);
        pop();     
    }
}