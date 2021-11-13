
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var polygon, polygonImg;
var slingshot

var engine, world;
function preload() {

    polygonImg = loadImage("polygon.png")
}

function setup() {
    createCanvas(900, 700);

   
    engine = Engine.create();
    world = engine.world;

    p1 = new Platform(375, 400, 250, 10)
    p2 = new Platform(700, 300, 200, 10)

    b1 = new Block(350, 350, 50, 50)
    b2 = new Block(400, 350, 50, 50)
    b3 = new Block(450, 350, 50, 50)
    b4 = new Block(375, 300, 50, 50)
    b5 = new Block(425, 300, 50, 50)
    b6 = new Block(400, 250, 50, 50)
    b7 = new Block(300, 350, 50, 50)
    b8 = new Block(325, 300, 50, 50)
    b9 = new Block(350, 250, 50, 50)
    b10 = new Block(375, 200, 50, 50)

    b11 = new Block(650, 250, 50, 50)
    b12 = new Block(700, 250, 50, 50)
    b13 = new Block(750, 250, 50, 50)
    b14 = new Block(675, 200, 50, 50)
    b15 = new Block(725, 200, 50, 50)
    b16 = new Block(700, 150, 50, 50)

    polygon = Bodies.circle(50, 200, 20)
    World.add(world, polygon)
    slingshot = new SlingShot(polygon, { x: 100, y: 200 })

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    background("black");

    fill("yellow")
    textSize(20)
    text("PRESS SPACE TO ATTACH THE POLYGON",50, 50)
    fill("red")
    p1.display()
    p2.display()

    fill("lightblue")
    b1.display()
    b2.display()
    b3.display()
    b7.display()
    b11.display()
    b12.display()
    b13.display()

    fill("pink")
    b4.display()
    b5.display()
    b8.display()
    b14.display()
    b15.display()

    fill("cyan")
    b6.display()
    b9.display()
    b16.display()

    fill("lightgreen")
    b10.display()

    image(polygonImg, polygon.position.x, polygon.position.y, 40, 40)
    slingshot.display()
}
function mouseDragged() {

    Matter.Body.setPosition(polygon, { x: mouseX, y: mouseY })

}
function mouseReleased() {

    slingshot.fly()

}
function keyPressed(){

    if(keyCode===32){

        slingshot.attach(polygon)
    }
}

