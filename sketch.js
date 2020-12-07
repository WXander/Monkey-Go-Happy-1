
var monkey , monkey_running;
var banana ,bananaImage,bananasGroup, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
    createCanvas(600,400);
    
  monkey = createSprite(150,300);
  monkey.addAnimation("running",monkey_running);
  monkey.scale = 0.2;
  
  ground = createSprite(300,375,600,10);
}


function draw() {
  background(255);

  monkey.collide(ground);
  
  if (keyWentDown("space")){
    monkey.velocityY = -20;
  }
   
  
  
  monkey.velocityY = monkey.velocityY + 0.8;
  
  drawSprites();
  spawnBanana();
}


function spawnBanana() {
  if (frameCount % 60 === 0) {
    banana = createSprite(width,50,40,10);
    banana.y = Math.round(random(height / 2,height / 8));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    banana.scale = 0.1;
  }
  
}



