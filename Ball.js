class Ball{
    constructor(x,y,width,height,angle){
        var options ={
            frictionAir: 0.05,
            density: 1.0
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.height = height;
        this.width = width;
        World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        angleMode(RADIANS);
        fill("green")
        ellipse(0,0,this.width,this.height);
        pop();
    }
}