var s.png = createSprite (80,310);

function preload(){
  

  seaImg = loadImage("sea.png");
shipImg1 = loadAnimation(s.png,s2.png)

}


function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaIing)
}

function draw() {
  background("blue");
 if (sea.x < 0){
   sea.x = sea.width/2
 }
}