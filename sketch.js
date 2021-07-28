var btnred;
var btngreen;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(400, 400);
btnred = createButton("red")
btnred.position(250,50)
btnred.mousePressed(red_bg)

btngreen = createButton("green")
btngreen.position(100,50)
btngreen.mousePressed(green_bg)
}
function red_bg(){

  r = 255
  g =0 
  b = 0
}
function green_bg()
{
  r = 0
  g = 255
  b = 0
}

function draw() {
  background(r,g,b);
}