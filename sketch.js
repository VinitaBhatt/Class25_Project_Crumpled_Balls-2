const Engine =Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var paper, dustbin, ground;



function setup(){
createCanvas(1800,500);

engine = Engine.create();
world = engine.world;

ground = new Ground(900,450,1800,35);
paper = new Paper(200,50,70);
dustbin = new Dustbin(900,425);

}

function draw(){
	background("white");
	Engine.update(engine);
	ground.display();
	paper.display();
	dustbin.display();


}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body,paper.body.position,{x:170,y:-170});
	}
}
