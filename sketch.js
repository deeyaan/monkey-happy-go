


function preload(){
  backImage=loadImage("Jungle1.jpg");
 monkeyimg=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  bananaimg = loadImage ("pineapple.gif");
 Stoneimg = loadImage ("stone.png");

  
}

function setup() {
  createCanvas(800,400);
  ground = createSprite(200,380,400,20);
  ground.addImage(backImage)
  ground.scale=2
   monkey = createSprite(200,330,20,50);
  monkey.addAnimation("MONKEY",monkeyimg)
  monkey.scale=0.25
   bananagroup=new Group()
  ground1 = createSprite(400,398,800,10);
  
}

function draw() {
   if(keyDown("space")){
  monkey.velocityY = -10 ;
  }
  
  //add gravity
monkey.velocityY = monkey.velocityY + 0.8;
  spawnBannanas();
  spawnObstacles();
  monkey.collide(ground1)
  drawSprites();
  if(bananagroup.isTouching(monkey)) {
    bananagroup.destroyEach();
  }
 
  
}

function spawnBannanas() {
  //write code here to spawn the clouds
  if (World.frameCount % 100 === 0) {
    var bannana = createSprite(600,250,40,10);
    bannana.y = random(100,250);
    bannana.addImage(bananaimg);
    bannana.scale = 0.15;
    bannana.velocityX = -3;
    
     //assign lifetime to the variable
    bannana.lifetime = 134;
    
    //adjust the depth
    bannana.depth = monkey.depth;
    bannana.depth = monkey.depth + 1;
    bananagroup.add(bannana)
    //add each cloud to the group
  }

}
function spawnObstacles() {
  //write code here to spawn the clouds
  if (World.frameCount % 100 === 0) {
    var obstacle = createSprite(400,349,40,10);
    obstacle.addImage(Stoneimg);
    obstacle.scale = 0.15;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 134;
    
    obstacle.depth = monkey.depth;
    obstacle.depth = monkey.depth + 1;
    
    //add each cloud to the group
  }

}

  
