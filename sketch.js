var index = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(235,64,52);
}

function draw() {
  noErase();
 
 // fill(235, 64, 52);
  
  fill(255, 255, 255);

 var janEleven = {
   a : 'ate tomatoes',
   b : 'went to schaller and weber',
   c : 'game of thrones',
 };

 var janTwelve = {
   a : 'called the banana phone',
   b : 'baked bread',
   c : 'coded this site',
 };

var first = [janEleven.a, janTwelve.a];
var second = [janEleven.b, janTwelve.b];
var third = [janEleven.c, janTwelve.c];

  textSize(48);
  rectMode(CENTER);
  textAlign(CENTER,CENTER);
  text(first[index],windowWidth/2,windowHeight/2-windowHeight/4, windowWidth/4, windowHeight/4);
  text(second[index],windowWidth/2,windowHeight/2, windowWidth/4, windowHeight/4);
  text(third[index],windowWidth/2,windowHeight/2+windowHeight/4, windowWidth/4, windowHeight/4);

  erase();
  drawingContext.shadowBlur = 6;
  drawingContext.shadowColor = color(235,64,52);
  noStroke();
  fill(255,255,255,90);
  ellipse(mouseX,mouseY,60,60);
}

function mousePressed() {
  clear();
  background(235,64,52);
  index = index + 1;

}
