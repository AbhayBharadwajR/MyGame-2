const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var gameState = 0;
var b1,b2,b3;
var form1, form2, form3;
var engine,world;
var playerS1;


function preload(){

b1=loadImage("images/screenshot.png")

}
function setup(){
    engine = Engine.create();
    world = engine.world;
    canvas = createCanvas(1300, 600);
    //playerS1 = new Player(650,300)

}
function draw(){
    background(b1);
    Engine.update(engine);
    console.log(gameState)
    
    if(gameState === 0){
        form1 = new firstForm()
        form1.display();
        
    }
    if(gameState === 1){
        form2 = new secondForm()
        form2.display();


    }
    if(gameState === 2){
     s1();
     //console.log("hiiii")
    }




    //playerS1.display();

}