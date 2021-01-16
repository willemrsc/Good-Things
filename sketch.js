var index = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(235,64,52);
}

function draw() {
  noErase();
  fill(235, 64, 52);

var date = [

  '01.15.21',
  '01.14.21',
  '01.13.21',
  '01.12.21',
  '01.11.21',

];

var first = [

  'Austin got an internship at slack',
  'made potstickers for lunch',
  'experimented with liming oak',
  'called the banana phone',
  'ate tomatoes',

];

var second = [

  'ate excellent pizza',
  'caught up with Soren',
  'made pupusas',
  'baked bread',
  'went to schaller and weber',

];
var third = [

  'had an Austrian beer',
  'made a spreadsheet',
  'talked with dad',
  'coded this site',
  'game of thrones',

];

  fill(235,64,52);
  textSize(48);
  rectMode(CORNER);
  textAlign(LEFT,TOP);
  text(date[index],20,20, windowWidth/4, windowHeight/4);
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
