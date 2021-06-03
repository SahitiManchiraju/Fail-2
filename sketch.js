const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground,sea_img,ship_img,ship2_img,ball_img,cannon_img,cannon_2img;
var engine,world,angle;
var balls = [];
var boats = [];
var score = 0;
var boatAnimation = [];
var boatSpritedata, boatSpritesheet;


function preload(){
  sea_img = loadImage("../images/sea.jpg");
  ship_img = loadImage("../images/ship.png"); 
  ship2_img = loadImage("../images/ship 2.png");  
  ball_img = loadImage("../images/ball.jpg");
  //cannon_img = loadImage("../images/cannon.png");
  cannon2_img = loadImage("../images/cannon2.png");
 
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  angle = -PI / 4;
  //boat = new Boat(200,200,50,50,1,1); 
  ground = new Ground(0, height - 1, width * 2, 1);
  cannon = new Cannon (180,110,130,100,angle);
}

function draw() {
  background(189);
  image(sea_img,0,0);
  Engine.update(engine);
  
  ground.display();
  cannon.display();
    drawSprites();
}
function showBoats(){
  if (boats.length > 0) {
    if (boats.length < 4 && boats[boats.length - 1].body.position.x < width - 300) {
      var positions = [-40, -60, -70, -20];
      var position = random(positions);
      var boat = new Boat(width,height - 100,170, 170,position,boatAnimation);

      boats.push(boat);
    }

    for (var i = 0; i < boats.length; i++) {
    Matter.Body.setVelocity(boats[i].body, {
       x: -0.9,
        y: 0
      });
  boats[i].display();
      boats[i].animate();
    }
  }else {
    var boat = new Boat(width, height - 60, 170, 170, -60, boatAnimation);
    boats.push(boat);
  }

}