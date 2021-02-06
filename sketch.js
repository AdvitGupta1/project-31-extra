const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Body=Matter.Body

var engine,world,bodies,body,human,ground;
var maxDrops=300;
var drops=[];
function preload(){
    
}

function setup(){
   createCanvas(800,700)
   engine = Engine.create();
    world = engine.world;
    if(frameCount%5===0){
      for(var i=0;i<maxDrops;i++){
      drops.push(new Drops(random(0,800),random(0,700),5))
  }}
  human=new Human(400,500);
  ground=new Ground(400,695,800,5);
}

function draw(){
    background(0)
    Engine.update(engine);
    human.display();
    ground.display();
        for(var i=0;i<maxDrops;i++){
          drops[i].display();
        }
   }