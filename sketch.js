var sun,sun_img;
var mercury,mercury_img;
var venus,venus_image;
var earth,earth_img;
var mars,mars_img;
var jupiter,jupiter_img;
var saturn,saturn_img;
var uranus,uranus_img;
var neptune,neptune_img;

var angle=0;
var angleSpeed=0.2;



function preload(){
  sun_img=loadImage("sun.png");
  mercury_img=loadImage("mercury.png")
  venus_img=loadImage("venus.png")
  earth_img=loadImage("earth.png")
  mars_img=loadImage("mars.png");
  jupiter_img=loadImage("jupiter.png")
  saturn_img=loadImage("saturn.png")
  uranus_img=loadImage("Uranus.png")
  neptune_img=loadImage("neptune.png")
}
function setup() {
  createCanvas(1500,5000);
  sun=createSprite(0,0);
  sun.addImage("sun",sun_img);
  sun.setCollider("circle",0,160,140);
  sun.scale=0.35;
  

  mercury=createSprite(150,100);
  mercury.addImage("mercury",mercury_img);
  mercury.scale=0.3;
  

  venus=createSprite(210,200);
  venus.addImage("venus",venus_img);
  venus.scale=0.35;

  earth=createSprite(320,300);
  earth.addImage("earth",earth_img);
  earth.scale=0.4;

  mars=createSprite(430,400);
  mars.addImage("mars",mars_img);
  mars.scale=0.3;

  jupiter=createSprite(540,500);
  jupiter.addImage("jupiter",jupiter_img);
  jupiter.scale=0.8;

  saturn=createSprite(700,600);
  saturn.addImage("saturn",saturn_img);
  saturn.scale=0.07;

  uranus=createSprite(800,700);
  uranus.addImage("uranus",uranus_img);
  uranus.scale=0.07;
  
  
  neptune=createSprite(870,800);
  neptune.addImage("neptune",neptune_img);
  neptune.scale=0.6;



}
function draw() {
  background(0);  
  angleMode(DEGREES);
  translate(width/2 , height/2);
  rotate(angle);

  if(mercury.collide(sun)){
    mercury.destroy();
  }
  if(venus.collide(sun)){
    venus.destroy();
  }
  if(earth.collide(sun)){
    earth.destroy();
  }
  if(mars.collide(sun)){
   mars.destroy();
  }
  if(jupiter.collide(sun)){
    jupiter.destroy();
  }
  if(saturn.collide(sun)){
    saturn.destroy();
  }
  if(uranus.collide(sun)){
    uranus.destroy();
  }
  if(neptune.collide(sun)){
    neptune.destroy();
  }

  angle = angle + angleSpeed;
  if(frameCount % 1 ===0){
    sun.scale=sun.scale+0.001;
  }
  
  drawSprites();
}