class Rope{
    constructor(b1,pointB){
        var option = {
            bodyA: b1,
            pointB: pointB,
            stiffness: 0.9,
            length: 200

        }
        this.pointB = pointB;
        this.rope = Constraint.create(option);
        World.add(world, this.rope);

    }
    display(){

        if(this.rope.bodyA){
        var point1 = this.rope.bodyA.position;
        var point2 = this.pointB;
        push();
        strokeWeight(5);
        stroke("black");
        line(point1.x,point1.y,point2.x,point2.y);
        pop();

        
    }
        }
        

    fly(){
        this.rope.bodyA = null;
    }

    attach(body){
        this.rope.bodyA = body;
    }
}