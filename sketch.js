
function preload(){
  //pre-load images
  coin = loadImage("coin.png");
  bomb = loadImage("bomb.png");
  energy = loadImage("energyDrink.png");
  pathImg  = loadImage("path.png");
  power = loadImage("power.png");
  runner = loadImage("Runner-1.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale  = 1.2;
  path.velocityY = 4;
  path.scale = 1.2;

  if(path.y > 400){
    path.y = height/2;
  }
}

function draw() {
  background(0);
  drawSprites();

}
