var index = 0;

function setup() {
  createCanvas(windowWidth,windowHeight);
  background(235,64,52);
}

function draw() {
  noErase();
  fill(235, 64, 52);

var date = [
  '01.25.21',
  '01.24.21',
  '01.23.21',
  '01.22.21',
  '01.21.21',
  '01.20.21',
  '01.19.21',
  '01.18.21',
  '01.17.21',
  '01.16.21',
  '01.15.21',
  '01.14.21',
  '01.13.21',
  '01.12.21',
  '01.11.21',

];

var first = [
  'had digital lunch with Sam',
  'grocery shopped at a relaxed hour of the morning',
  'ate some clothbound cheddar',
  'finished Game of Thrones!',
  'did a suit fitting with David on facetime',
  'made chicken liver pâté',
  'brainstormed beer labels with Isaac',
  'finished brushing oak shelves',
  'texted with Mark',
  'walked in Centreal Park',
  'Austin got an internship at slack',
  'made potstickers for lunch',
  'experimented with liming oak',
  'called the banana phone',
  'ate tomatoes',

];

var second = [
  'my new cast iron pan is getting well seasoned',
  'had a draft home brew!',
  'walked with Vic in Central Park',
  'ate biryani and tikka paneer',
  'got to know Mark a little more',
  'cleaned off my desk',
  'might get a furniture design independent study',
  'learned how to make chicken liver pâté',
  'excercised and felt great',
  'talked to Andreas about jobs',
  'ate excellent pizza',
  'caught up with Soren',
  'made pupusas',
  'baked bread',
  'went to schaller and weber',

];
var third = [
  'talked to my mom and her friend Anne on the phone',
  'cooked falafel and eggplant caviar',
  'drank a Greenport Harbor Otherside IPA',
  'working on my AutoCad skills',
  'chatted with Ben on zoom about furniture design',
  'the inauguration!!!',
  'Game of Thrones: Arya just killed the Night King',
  'cast iron cooked a perfect spider steak',
  'cooked scalloped potatoes',
  'Looked at new job offerings',
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
  text(first[index],windowWidth/2,windowHeight/2-windowHeight/4, width/2, height/2);
  text(second[index],windowWidth/2,windowHeight/2, width/2, height/2);
  text(third[index],windowWidth/2,windowHeight/2+windowHeight/4, width/2, height/2);

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
