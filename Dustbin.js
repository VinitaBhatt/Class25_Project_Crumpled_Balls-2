class Dustbin{

    
    constructor(x,y){
        var options = {
            isStatic :true
        }

        this.x = x;
        this.y = y;
        this.width =220;
        this.height = 20;
        this.leftbody = Bodies.rectangle(780,325,this.height,this.width,options);
        this.rightbody = Bodies.rectangle(1020,325,this.height,this.width,options);
        this.bottombody = Bodies.rectangle(x,y,this.width, this.height,options);
        this.image = loadImage("dustbingreen.png");
        
        World.add(world,this.leftbody);
        World.add(world,this.rightbody);
        World.add(world,this.bottombody);
    }

    display(){
        push();
        rectMode(CENTER);
        fill("white");
        rect(this.leftbody.position.x, this.leftbody.position.y, this.height,this.width);
        rect(this.rightbody.position.x, this.rightbody.position.y, this.height,this.width);
        rect(this.bottombody.position.x, this.bottombody.position.y, this.width,this.height);
        imageMode(CENTER);
        image(this.image,this.bottombody.position.x, this.bottombody.position.y-120, this.width, this.width);
        pop();
    }
}