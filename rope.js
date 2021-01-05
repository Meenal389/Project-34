class Rope{
    constructor(b1,b2,offSetX,offSetY){
        this.offSetX=offSetX;
        this.offSetY=offSetY;
       var options={
           bodyA:b1,
           bodyB:b2,
           pointB:{x:this.offSetX, y:this.offSetY}
       }
       this.Rope=Constraint.create(options);
       World.add(world,this.Rope)
    }

    display(){
        var posA=this.Rope.bodyA.position;
        var posB=this.Rope.bodyB.position;

        strokeWeight(3)
        line(posA.x,posA.y,posB.x+this.offSetX,posB.y+this.offSetY);
    }
}