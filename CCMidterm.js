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

//SCENE TWO VARIABLES//
var scene2 = false
var shelvesmove1 = 600
var shelvesmove2 = 600
var bedroommove = 0

//SCENE THREE VARIABLES//
var scene3 = false

//SCENE FOUR VARIABLES//
var scene4 = false
var flash = 0
var flashcolor = "#000000"

//SCENE SLEEPING BEDROOM VARIABLES//
var sb_scene = false

function setup() {
  createCanvas(700, 700);
  //frameRate(60);

  for (var i = 0; i < 200; i++) {
    rain[i] = new Rain();
  }
  
}

function draw() {

  if (scene1 == true) {
    scene_one();

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
    //moon movement
    if (moon < 900) {
      moon = moon + 2;
      cloudfade = cloudfade - 0.8;
    }
    //sun movement
    if (sun > 100) {
      sun = sun + -2;
    }
    //sunrise
    sunrise = sunrise + 0.5;

    if (sun == 100) {
    }
  }

  if(scene2 == true){
    scene_two()

    if(frameCount == 670){
      bedroommove = 1000
      shelvesmove1 = 0
      
    }

    if(frameCount > 675){
      shelvesmove1 = shelvesmove1 - 1.5
      shelvesmove2 = shelvesmove2 - 1.5

    }

    if(frameCount == 1100){
      bedroommove = 0
      shelvesmove1 = -1000
      shelvesmove2 = -1000
    }

  }

  if(scene3 == true){
    scene_three()
  }

  if(sb_scene == true){
    sleeping_bedroom()
  }

  if(scene4 == true){
    scene_four()
    flash = flash + 1
  }

  if(frameCount == 550){
    scene1 = false
    scene2 = true
    scene3 = false
    scene4 = false
  }else if(frameCount == 1200){
    scene2 = false
    scene3 = true
  }else if(frameCount == 1300){
    scene3 = false
    sb_scene = true
  }else if(frameCount == 1400){
    sb_scene = false
    scene4 = true
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

//scene set in main characters bedroom, pan over her wall, showing pictures of her, her friends and trophies and metals shes won.
function scene_two() {
  angleMode(DEGREES);
  background(194, 112, 190);
  
  push()
  translate(bedroommove, 0)
  noStroke();
  //window
  fill(74, 72, 72);
  rect(350, 170, 250, 250);
  fill(184, 230, 255);
  rect(360, 180, 230, 230);
  fill(74, 72, 72);
  rect(470, 170, 10, 250);
  rect(460, 390, 5, 30);

  //desk
  push();
  translate(-20, 0);
  push();
  rotate(20);
  fill(255, 255, 255);
  rect(750, 270, 20, 180);
  rotate(140);
  rect(-430, -880, 20, 180);
  pop();
  fill(207, 148, 74);
  rect(540, 500, 170, 20);
  fill(255, 255, 255);
  rect(585, 600, 80, 20);
  pop();

  //desk chair
  fill(235, 235, 235);
  ellipse(480, 570, 100, 30);
  ellipse(440, 500, 30, 120);
  fill(102, 102, 102);
  rect(420, 570, 110, 20);
  rect(420, 450, 20, 130);
  rect(470, 570, 20, 60);
  rect(465, 630, 30, 40);
  rect(455, 670, 50, 10);

  //computer and keyboard
  fill(0, 0, 0);
  rect(600, 492, 50, 8);
  rect(620, 450, 8, 50);
  rect(616, 400, 15, 70);
  rect(540, 494, 30, 6);

  //pillow
  fill(255, 255, 255);
  ellipse(80, 550, 80, 30);
  //bed
  fill(255, 255, 255);
  rect(20, 450, 20, 230);
  rect(300, 550, 20, 130);
  rect(20, 600, 280, 20);
  rect(13, 440, 35, 20);
  rect(293, 530, 35, 20);
  fill(255, 214, 250);
  rect(40, 555, 260, 45, 5);

  //chest
  fill(66, 36, 0);
  rect(320, 590, 90, 90);
  fill(181, 181, 181);
  rect(410, 620, 10, 20);

  //girl
  fill(48, 21, 7);
  ellipse(100, 510, 90, 90);
  fill(0, 0, 0);
  rect(85, 480, 5, 15);
  ellipse(60, 510, 50, 100);

  //bed covers
  fill(237, 237, 237);
  ellipse(200, 510, 200, 100);
  rect(100, 510, 200, 100, 5);

  //bedside table
  fill(66, 36, 0);
  rect(30, 565, 90, 15);
  rect(65, 570, 15, 100);
  rect(58, 665, 30, 20);

  //phone
  fill(0, 0, 0);
  rect(60, 560, 45, 5);

  //shelves
  fill(255, 255, 255);
  rect(60, 350, 100, 10);
  rect(190, 380, 100, 10);

  //posters
  fill(191, 191, 191);
  push();
  rotate(10);
  rect(100, 100, 80, 120);
  pop();

  push();
  rotate(2);
  rect(200, 180, 80, 120);
  pop();

  //lights
  fill(66, 36, 0);
  rect(300, 0, 100, 15);
  rect(345, -20, 10, 100);
  fill(255, 243, 82);
  ellipse(350, 85, 15, 15);
  fill(66, 36, 0);
  rect(300, 77, 100, 5);

  //floor
  fill(56, 31, 0);
  rect(0, 680, 700, 30);
  pop();

  
  push();
  translate(shelvesmove1,0)
  noStroke()
  //shelves closeup 1
  fill(255, 255, 255)
  rect(100,400,500,30)
  
  //small mirror
  fill(97, 50, 0);
  rect(130,200,150,200)
  fill(201, 255, 255)
  rect(140,210,130,180)
  
  //picture 
  fill(255, 207, 156);
  rect(410,200,150,200)
  fill(227, 127, 20);
  rect(420,210,130,180)
  fill(211, 157, 245)
  rect(460,290,50,100)
  fill(0,0,0)
  ellipse(460,250,50,50)
  ellipse(510,250,50,50)
  fill(54, 28, 0)
  ellipse(485,290,70,70)
  fill(54, 28, 0)
  rect(440,330,20,60)
  rect(510,330,20,60)
  fill(211, 157, 245)
  ellipse(450,330,30,30)
  ellipse(520,330,30,30)
  fill(0,0,0)
  ellipse(470,280,5,15)
  ellipse(490,280,5,15)
  pop();

  push();
  translate(shelvesmove2,0)
  noStroke()
  //shelves closeup 2
  fill(255, 255, 255);
  rect(100,500,500,30);

  //trophey
  fill(51, 28, 0);
  rect(270,470,180,30);
  rect(300,390,120,80);
  fill(255, 215, 0);
  rect(310,395,100,60);

  ellipse(360,340,100,100);
  rect(310,240,100,100);
  pop();

}

function scene_three(){
  background(56, 31, 0)

  noStroke()
  //bedside table
  fill(66, 36, 0);
  ellipse(340, 340, 500, 500);

  //phone
  push();
  fill(191,148,228)
  rect(400,200,130,250, 5)
  fill(flashcolor)
  rect(405,205,120,240, 5)
  fill(0, 22, 56)
  ellipse(465,220,10,10)
  pop();

  //phone charger
  push()
  fill(0,0,0)
  rect(260,300, 5,400)
  fill(0,0,0)
  ellipse(260,330,130,130)
  fill(255, 194, 28)
  ellipse(260,330,110,110)
  fill(0,0,0)
  ellipse(260,330,100,100)
  pop()

}

function scene_four(){
  background(56, 31, 0)

  noStroke()
  //bedside table
  fill(66, 36, 0);
  ellipse(340, 340, 500, 500);

  //phone
  push();
  translate(random(-5,5),random(-5,5))
  fill(191,148,228)
  rect(400,200,130,250, 5)
  fill(flashcolor)
  rect(405,205,120,240, 5)
  fill(0, 22, 56)
  ellipse(465,220,10,10)
  pop();

  //phone charger
  push()
  fill(0,0,0)
  rect(260,300, 5,400)
  fill(0,0,0)
  ellipse(260,330,130,130)
  fill(255, 194, 28)
  ellipse(260,330,110,110)
  fill(0,0,0)
  ellipse(260,330,100,100)
  pop()

  if(flash % 10 == 0){
    flashcolor = "#ff0000"
    
  }else{
    flashcolor = "#000000"
  }

}

function sleeping_bedroom(){
  angleMode(DEGREES);
  background(194, 112, 190);
  push()
  noStroke();
  //window
  fill(74, 72, 72);
  rect(350, 170, 250, 250);
  fill(184, 230, 255);
  rect(360, 180, 230, 230);
  fill(74, 72, 72);
  rect(470, 170, 10, 250);
  rect(460, 390, 5, 30);

  //desk
  push();
  translate(-20, 0);
  push();
  rotate(20);
  fill(255, 255, 255);
  rect(750, 270, 20, 180);
  rotate(140);
  rect(-430, -880, 20, 180);
  pop();
  fill(207, 148, 74);
  rect(540, 500, 170, 20);
  fill(255, 255, 255);
  rect(585, 600, 80, 20);
  pop();

  //desk chair
  fill(235, 235, 235);
  ellipse(480, 570, 100, 30);
  ellipse(440, 500, 30, 120);
  fill(102, 102, 102);
  rect(420, 570, 110, 20);
  rect(420, 450, 20, 130);
  rect(470, 570, 20, 60);
  rect(465, 630, 30, 40);
  rect(455, 670, 50, 10);

  //computer and keyboard
  fill(0, 0, 0);
  rect(600, 492, 50, 8);
  rect(620, 450, 8, 50);
  rect(616, 400, 15, 70);
  rect(540, 494, 30, 6);

  //pillow
  fill(255, 255, 255);
  ellipse(80, 550, 80, 30);
  //bed
  fill(255, 255, 255);
  rect(20, 450, 20, 230);
  rect(300, 550, 20, 130);
  rect(20, 600, 280, 20);
  rect(13, 440, 35, 20);
  rect(293, 530, 35, 20);
  fill(255, 214, 250);
  rect(40, 555, 260, 45, 5);

  //chest
  fill(66, 36, 0);
  rect(320, 590, 90, 90);
  fill(181, 181, 181);
  rect(410, 620, 10, 20);

  //girl
  fill(48, 21, 7);
  ellipse(100, 510, 90, 90);
  fill(0, 0, 0);
  rect(85, 480, 5, 15);
  ellipse(60, 510, 50, 100);

  //bed covers
  fill(237, 237, 237);
  ellipse(200, 510, 200, 100);
  rect(100, 510, 200, 100, 5);

  //bedside table
  fill(66, 36, 0);
  rect(30, 565, 90, 15);
  rect(65, 570, 15, 100);
  rect(58, 665, 30, 20);

  //phone
  fill(0, 0, 0);
  rect(60, 560, 45, 5);

  //shelves
  fill(255, 255, 255);
  rect(60, 350, 100, 10);
  rect(190, 380, 100, 10);

  //posters
  fill(191, 191, 191);
  push();
  rotate(10);
  rect(100, 100, 80, 120);
  pop();

  push();
  rotate(2);
  rect(200, 180, 80, 120);
  pop();

  //lights
  fill(66, 36, 0);
  rect(300, 0, 100, 15);
  rect(345, -20, 10, 100);
  fill(255, 243, 82);
  ellipse(350, 85, 15, 15);
  fill(66, 36, 0);
  rect(300, 77, 100, 5);

  //floor
  fill(56, 31, 0);
  rect(0, 680, 700, 30);
  pop();
}