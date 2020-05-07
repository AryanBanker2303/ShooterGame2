var player, bulletGroup, enemyGroup;
var bgImage;
var playerAngle;
var bulletImg;
var score, enemyKillCount,money;
function preload(){
bgImage = loadImage("bg.png");
bulletImg = loadImage("Spike2.jfif");

}
function setup(){
createCanvas(1500,700);
player = createSprite(width/2, height/2,20,20);
player.shapeColor = "green"
score = 0;
enemyKillCount = 0;
money = 1;
bulletGroup = new Group();
enemyGroup = new Group();
}

function draw(){
background(bgImage);

if(frameCount % 50  === 0){
spawnEnemiesTop();
spawnEnemiesLeft();
spawnEnemiesBottom();
spawnEnemiesRight();
}

console.log(player.getDirection());

for(var i = 0; i<enemyGroup.length; i++ ){
temp = enemyGroup.get(i);

for(var j = 0; j<bulletGroup.length; j++){
temp2 = bulletGroup.get(j);
if(temp2.collide(temp)){
temp.destroy();
temp2.destroy();
score+=round(random(5,20));
enemyKillCount+=1;
money+=round(random(25,250));
break;
}
}
}

if(keyWentDown(UP_ARROW)){
spawnBullets();
}
if(keyDown(RIGHT_ARROW)){
  player.rotation = player.rotation + 5;
}
if(keyDown(LEFT_ARROW)){
  player.rotation = player.rotation -5;
}
playerAngle = player.rotation;
if(keyDown("w")){
player.velocityY = -4;
}

if(keyDown("s")){
  player.velocityY = 4;
  }
  
if(keyDown("a")){
  player.velocityX = -4;
  }
  
if(keyDown("d")){
  player.velocityX = 4;
  }
  text("Score : "+score,650,20);
  text("Enemies Killed : "+enemyKillCount,750,20);
  text("$$$ Money $$$ : "+money+"$",475,20);
drawSprites();
}



function spawnEnemiesTop(){
var enemy = createSprite(random(0,1500),0,random(20,40),random(20,40));
enemy.shapeColor = "red";
enemy.velocityY = 10;
enemy.lifetime= 100;
enemyGroup.add(enemy);
}
function spawnEnemiesLeft(){
  var enemy = createSprite(0,random(0,700),random(20,40),random(20,40));
  enemy.shapeColor = "violet";
  enemy.velocityX = 10;
  enemy.lifetime= 150;
  enemyGroup.add(enemy);
  }
  function spawnEnemiesBottom(){
    var enemy = createSprite(random(0,1500),700,random(20,40),random(20,40));
    enemy.shapeColor = "orange";
    enemy.velocityY = -10;
    enemy.lifetime= 100;
    enemyGroup.add(enemy);
    }
    function spawnEnemiesRight(){
      var enemy = createSprite(1500,random(0,700),random(20,40),random(20,40));
      enemy.shapeColor = "blue";
      enemy.velocityX = -10;
      enemy.lifetime= 150;
      enemyGroup.add(enemy);
      }

function spawnBullets(){
var bullet  = createSprite(player.x,player.y,10,30);
bullet.setSpeedAndDirection(15,player.getDirection());
bullet.shapeColor = rgb(255,random(0,255),255);
bullet.rotationSpeed = 20;
bullet.addImage(bulletImg);
bullet.scale = 0.1;
bulletGroup.add(bullet);

}      