const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;



var ball;

function setup() {
  createCanvas(1600,600);
   engine = Engine.create();
    world = engine.world;

    stand = new Ground(550,400,220,20)
    ground = new Ground(600,height,1600,20);
    ball = new Ball(210,165,40);
  //createSprite(400, 200, 50, 50);
  
   cup1 = new Cups(470,350,50,40);
   cup2 = new Cups(540,370,50,40);
   cup3 = new Cups(610,370,50,40);
   cup4 = new Cups(500,310,50,40);
   cup5 = new Cups(570,330,50,40);
   cup6 = new Cups(530,290,50,40)
  slingshot = new SlingShot(ball.body,{x:120, y:315});
}

function draw() {
  background("cyan");  
text(mouseX + "," + mouseY, 30,30)
ball.display();
ground.display();
slingshot.display();
stand.display();
cup1.display();
cup2.display();
cup3.display();
cup4.display();
cup5.display();
cup6.display();

// if(ball.isTouching(cup1)){
// cup1.destroy();
// }



Engine.update(engine);
  drawSprites();
}
function mouseDragged(){
  //if (gameState!=="launched"){
      Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
 // }
}

function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
}