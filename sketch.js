var canvas,bg;
var together;
var tom, tomImg1,tomImg2,tomImg3;
var jerry, jerryImg1,jerryImg2,jerryImg3;

function preload() {
    bg = loadImage("images/garden.png");
    tomImg1= loadAnimation("images/tomOne.png");
    tomImg23=loadAnimation("images/tomTwo.png","images/tomThree.png");
    tomImg4= loadAnimation("images/tomFour.png");
    jerryImg1=loadAnimation("images/jerryOne.png");
    jerryImg23= loadAnimation("images/jerryTwo.png","images/jerryThree.png");
    jerryImg4=loadAnimation("images/jerryFour.png");

}

function setup(){
    canvas = createCanvas(1000,800);

    tom = createSprite(870, 600);
    tom.addAnimation("tomSleeping", tomImg1);
    tom.scale = 0.2;

    jerry = createSprite(200, 600);
    jerry.addAnimation("jerryStanding", jerryImg1);
    jerry.scale = 0.15;

}

function draw() {

    background(bg);

    if(tom.x - jerry.x < (tom.width - jerry.width)/2)
    { 
        tom.velocityX=0;
        tom.addAnimation("tomLastImage", tomImg4);
        tom.x =300;
        tom.scale=0.2;
        tom.changeAnimation("tomLastImage");
        jerry.addAnimation("jerryLastImage", jerryImg4);
        jerry.scale=0.15;
        jerry.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        tom.velocityX = -5; 
        tom.addAnimation("tomRunning", tomImg23);
        tom.changeAnimation("tomRunning");
        
        jerry.addAnimation("jerryTeasing", jerryImg23);
        jerry.frameDelay = 25;
        jerry.changeAnimation("jerryTeasing");
    }
}