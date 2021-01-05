class Bob{
    constructor(x,y,radius){
        var options={
            isStatic: false,
            density: 0.8,
            friction:0,
            frictionAir:0,
            slop:1,
            inertia:Infinity,
            restitution:1
        }
        this.body=Bodies.circle(x,y,radius,options);
        this.radius=radius;
        this.image=loadImage("Sprites/balls.png");
        World.add(world,this.body)
    }
        display(){
            var pos=this.body.position;
            var ang=this.body.angle;
            push()
            translate(pos.x,pos.y)
            imageMode(CENTER);
            image(this.image, 0, 0, this.width, this.height);
            pop()
        }
     }
        
    
