var tomImg, jerryImg;
var tom, jerry;
var gardenImg, garden;
function preload() {
    //load the images here
    tomImg=loadAnimation( "images/cat2.png", "images/cat3.png",);
    jerryImg=loadAnimation("images/mouse1.png", "images/mouse3.png", );
    gardenImg=loadImage("images/garden.png");

  

}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
   garden=createSprite(500,500,500,500);
    garden.addImage(gardenImg);
    tom=createSprite(700,600,20,20);
    tom.scale=0.2;
    tom.addAnimation("YEET", tomImg);
    jerry=createSprite(300,600,20,20);
    jerry.scale=0.2;
    jerry.addAnimation("W", jerryImg);
    tom.debug=true;
    tom.setCollider("rectangle", 0,0,30,30 );
    jerry.debug=true;
    jerry.setCollider("rectangle", 0,0,40,20);
    

    
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(jerry.x - tom.x <= jerry.width/2 + tom.width/2 && tom.x - jerry.x <= tom.width/2 + jerry.width/2){
        tom.velocityX=0;
        }
     
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if (keyDown("left")) {
      tom.velocityX=-5;
  }
  if(jerry.x - tom.x <= jerry.width/2 + tom.width/2 && tom.x - jerry.x <= tom.width/2 + jerry.width/2){
      jerry.changeAnimation("W", mouse4.png);
      tom.changeAnimation("YEET",cat4.png);



    }
    else {
        jerry.addAnimation("W", jerryImg);
        tom.addAnimation("YEET", tomImg);
    }
}
