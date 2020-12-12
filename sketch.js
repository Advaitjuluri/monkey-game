
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var SurvivalTime=0;

function preload(){
  
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
 
  
}



function setup() {
  createCanvas(600, 400);
  
monkey=createSprite(80,325,20,20);
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1
  
  ground=createSprite(500,360,900,10);
 ground.veocityX=-4;
ground.x=ground.width/2;
  console.log(ground.x);
 
 
  
  fruitGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  
  background("lightgreen")
  
  if(keyDown("space")&&monkey.y >= 100){
monkey.velocityY=-10;
}
//adding gravity
    monkey.velocityY = monkey.velocityY + 0.8
monkey.collide(ground);
console.log(frameCount);
stroke(0);
fill(0);
textSize(20);
survivalTime=Math.ceil(frameCount/frameRate());
text("survival Time="+survivalTime,250,50);

  
  spawnBanana();
   spawnObstacle();
  
  drawSprites();
}

function spawnBanana(){
  
  if(World.frameCount%80===0){
 
  banana = createSprite(590,50,10,10);
  
  
  banana.addImage(bananaImage);
  banana.scale=0.1;
  banana.lifetime=400;
  banana.y = Math.round(random(70,150));
   monkey.depth=banana.depth+1; 

  banana.velocityX=-3;
  fruitGroup.add(banana);
}}

function spawnObstacle(){
  if(World.frameCount%300===0){
obstacle=createSprite (480,315,20,10)
     
  obstacle.addImage(obstacleImage);
  obstacle.scale=0.2;
  obstacle.velocityX=-3
    obstacle.lifetime=400;
   obstacleGroup.add(obstacle);
  }
    
}

