class Paper{

    constructor(x,y,radius){
        var options={
            isStatis :false,
            restitution : 0.3,
            friction : 0,
            density : 0.3   
        }
        this.body = Bodies.circle(x,y,radius-10, options);
        this.radius = radius;
        this.image = loadImage("paper.png")
        World.add(world,this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        //imageMode(CENTER);
        //fill("pink");
        image(this.image, 0,0,this.radius,this.radius);
        pop();
    }
}