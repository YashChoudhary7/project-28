class xyz{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.xyz = Constraint.create(options);
        World.add(world, this.xyz);
    }

    display(){
        if (this.xyz.bodyA) {
            var pointA = this.xyz.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);   
        }
       
    }
    fly(){
        this.xyz.bodyA=null;
    }
}