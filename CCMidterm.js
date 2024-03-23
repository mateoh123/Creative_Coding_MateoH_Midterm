//SCENES ONE VARIABLES//
var scene1 = true;
var rain = [];
var moon = 0;
var sun = 800;
var sunrise = 0;
var dooropen = 50;
var knob = 550;
var cloudfade = 300;
var lightson = "#000000";

function setup() {
  createCanvas(700, 700);
  frameRate(60);

  for (var i = 0; i < 200; i++) {
    rain[i] = new Rain();
  }
  
}

function draw() {
  if (frameCount == 420) {
    lightson = "#ffef14";
  } else if (frameCount >= 450) {
    //door open
    if (dooropen > 5) {
      dooropen = dooropen - 1.5;
    }

    if (knob > 520) {
      knob = knob - 1;
    }
  }

  if (scene1 == true) {
    //SCENE ONE ATTRIBUTES//

    //moon movement
    if (moon < 900) {
      moon = moon + 2;
      cloudfade = cloudfade - 0.8
      
    }

    //sun movement
    if (sun > 100) {
      sun = sun + -2;
    }

    //sunrise
    sunrise = sunrise + 0.5;

    if (sun == 100) {
    }

    scene_one();
  }

}

//raining night, turns into sunny day. Camera zooms into door
function scene_one() {
  background(0, 0, sunrise);

  //moon
  push();
  translate(0, moon);
  fill(237, 233, 230);
  ellipse(100, 100, 100, 100);
  fill(0, 0, sunrise);
  ellipse(120, 100, 100, 100);
  pop();

  //sun
  fill(255, 207, 51);
  ellipse(600, sun, 100, 100);

  //ground
  noStroke();
  fill(110, 110, 110);
  rect(0, 660, 800, 40);

  //main house
  push();
  fill(201, 179, 159);
  rect(410, 410, 250, 250);

  //doorframe
  fill(74, 72, 72);
  rect(505, 555, 60, 105);
  //door
  fill(0, 0, 0);
  rect(510, 560, 50, 100);
  fill(64, 35, 9);
  rect(510, 560, dooropen, 100);
  //door knob
  fill(218, 165, 32);
  ellipse(knob, 610, 10, 10);

  fill(74, 72, 72);
  rect(430, 460, 80, 80);
  rect(560, 460, 80, 80);

  fill(lightson);
  rect(435, 465, 70, 70);
  fill(0, 0, 0);
  rect(565, 465, 70, 70);

  fill(74, 72, 72);
  rect(467, 460, 5, 80);
  rect(430, 497, 80, 5);
  rect(597, 460, 5, 80);
  rect(560, 497, 80, 5);

  //roof
  triangle(408, 410, 662, 410, 530, 300);
  pop();

  //second house
  push();
  translate(-310, 0);
  fill(204, 172, 143);
  rect(410, 410, 250, 250);

  fill(74, 72, 72);
  rect(505, 555, 60, 105);
  fill(64, 35, 9);
  rect(510, 560, 50, 100);
  fill(218, 165, 32);
  ellipse(550, 610, 10, 10);

  fill(99, 91, 83);
  rect(430, 460, 80, 80);
  rect(560, 460, 80, 80);

  fill(0, 0, 0);
  rect(435, 465, 70, 70);
  rect(565, 465, 70, 70);

  fill(99, 91, 83);
  rect(467, 460, 5, 80);
  rect(430, 497, 80, 5);
  rect(597, 460, 5, 80);
  rect(560, 497, 80, 5);

  //roof
  triangle(408, 410, 662, 410, 530, 300);
  pop();

  //third house
  push();
  translate(-620, 0);

  fill(145, 106, 70);
  rect(410, 410, 250, 250);

  fill(74, 72, 72);
  rect(505, 555, 60, 105);
  fill(64, 35, 9);
  rect(510, 560, 50, 100);
  fill(218, 165, 32);
  ellipse(550, 610, 10, 10);

  fill(69, 59, 50);
  rect(430, 460, 80, 80);
  rect(560, 460, 80, 80);

  fill(0, 0, 0);
  rect(435, 465, 70, 70);
  rect(565, 465, 70, 70);

  fill(69, 59, 50);
  rect(467, 460, 5, 80);
  rect(430, 497, 80, 5);
  rect(597, 460, 5, 80);
  rect(560, 497, 80, 5);

  //roof
  triangle(408, 410, 662, 410, 530, 300);
  pop();

  //rain
  if (sun > 100) {
    for (var i = 0; i < 100; i++) {
      rain[i].show();
      rain[i].update();
    }
  }

  //clouds
  fill(148, 148, 148, cloudfade);
  ellipse(80, -20, 200, 100);
  ellipse(200, -20, 200, 100);
  ellipse(250, -20, 200, 100);
  ellipse(350, -20, 200, 100);
  ellipse(400, -20, 200, 100);
  ellipse(500, -20, 200, 100);
  ellipse(640, -20, 200, 100);
}

function Rain() {
  this.x = random(0, width);
  this.y = random(0, -height);
  this.show = function () {
    fill(94, 172, 255, 100);
    noStroke();
    ellipse(this.x, this.y, 4, 12);
  };
  this.update = function () {
    this.speed = random(5, 15);
    this.gravity = 1.05;
    this.y = this.y + this.speed * this.gravity;

    if (this.y > height) {
      this.y = random(0, -height);
      this.gravity = 0;
    }
  };
}
