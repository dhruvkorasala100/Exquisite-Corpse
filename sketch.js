let bgImg;
let head;
let body;
let legs;


function preload() {
  bgImg = loadImage('background.jpg');
  head = loadImage('head.png');
  body = loadImage('body.png');
  legs = loadImage('legs.png');
}

function setup() {
  createCanvas(400, 600);
  bgImg.resize(400, 600);
  head.resize(200,0);
  body.resize(200,0);
  legs.resize(200,0);
  
}

function draw() {
  image(bgImg, 0, 0);
  image(head, 100, 30);
  image(body, 100, 170);
  image(legs, 100, 310);
  
  fill(0, 255, 0);
}