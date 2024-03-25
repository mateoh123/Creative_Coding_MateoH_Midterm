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
var shakes = 5

//SCENE SLEEPING BEDROOM VARIABLES//
var sb_scene = false

//SCENE FIVE VARIABLES//
var scene5 = false

//SCENE SIX VARIABLES//
var scene6 = false
var hand_movement = 0
var phone_movement = 0
var phoneoncharger = false
var shakes2 = 15

//SCENE SEVEN VARIABLES//

var scene7 = false
var b1 = -100
var b2 = -100
var b3 = -100
var b4 = -100
var b5 = -100
var b6 = -100
var b7 = -100
var b8 = -100
var b9 = -100
var b10 = -100
var b11 = -100
var b12 = -100
var b13 = -100
var b14 = -100
var shakes3 = 0

//SCENE EIGHT VARIABLES//
var scene8 = false
var eye_color = "#000000"


function setup() {
  createCanvas(700, 700);
  //frameRate(60);

  for (var i = 0; i < 200; i++) {
    rain[i] = new Rain();
  }

}

function draw() {
  //scene_eight()

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

  if (scene2 == true) {
    scene_two()

    if (frameCount == 670) {
      bedroommove = 1000
      shelvesmove1 = 0

    }

    if (frameCount > 675) {
      shelvesmove1 = shelvesmove1 - 1.5
      shelvesmove2 = shelvesmove2 - 1.5

    }

    if (frameCount == 1100) {
      bedroommove = 0
      shelvesmove1 = -1000
      shelvesmove2 = -1000
    }

  }

  if (scene3 == true) {
    scene_three()
  }

  if (sb_scene == true) {
    sleeping_bedroom()
  }

  if (scene4 == true) {
    scene_four()
    flash = flash + 1
  }

  if (scene5 == true) {
    scene_five()
  }

  if (scene6 == true) {
    scene_six()
  }

  if (scene7 == true) {
    scene_seven()
  }

  if (scene8 == true) {
    scene_eight()
  }

  if (frameCount == 550) {
    scene1 = false
    scene2 = true
    scene3 = false
    scene4 = false
  } else if (frameCount == 1200) {
    scene2 = false
    scene3 = true
  } else if (frameCount == 1300) {
    scene3 = false
    sb_scene = true
  } else if (frameCount == 1400) {
    sb_scene = false
    scene4 = true

  } else if (frameCount == 1500) {
    sb_scene = true
    scene4 = false
  } else if (frameCount == 1600) {
    sb_scene = false
    scene4 = true
    shakes = 10
  } else if (frameCount == 1700) {
    sb_scene = true
    scene4 = false
  } else if (frameCount == 1800) {
    sb_scene = false
    scene4 = true
    shakes = 15
  } else if (frameCount == 1900) {
    scene4 = false
    scene5 = true
  } else if (frameCount == 2000) {
    scene5 = false
    scene6 = true
  } else if (frameCount == 2500) {
    scene6 = false
    scene7 = true
  } else if (frameCount == 3800) {
    scene7 = false
    scene8 = true
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
  translate(shelvesmove1, 0)
  noStroke()
  //shelves closeup 1
  fill(255, 255, 255)
  rect(100, 400, 500, 30)

  //small mirror
  fill(97, 50, 0);
  rect(130, 200, 150, 200)
  fill(201, 255, 255)
  rect(140, 210, 130, 180)

  //picture 
  fill(255, 207, 156);
  rect(410, 200, 150, 200)
  fill(227, 127, 20);
  rect(420, 210, 130, 180)
  fill(211, 157, 245)
  rect(460, 290, 50, 100)
  fill(0, 0, 0)
  ellipse(460, 250, 50, 50)
  ellipse(510, 250, 50, 50)
  fill(54, 28, 0)
  ellipse(485, 290, 70, 70)
  fill(54, 28, 0)
  rect(440, 330, 20, 60)
  rect(510, 330, 20, 60)
  fill(211, 157, 245)
  ellipse(450, 330, 30, 30)
  ellipse(520, 330, 30, 30)
  fill(0, 0, 0)
  ellipse(470, 280, 5, 15)
  ellipse(490, 280, 5, 15)
  pop();

  push();
  translate(shelvesmove2, 0)
  noStroke()
  //shelves closeup 2
  fill(255, 255, 255);
  rect(100, 500, 500, 30);

  //trophey
  fill(51, 28, 0);
  rect(270, 470, 180, 30);
  rect(300, 390, 120, 80);
  fill(255, 215, 0);
  rect(310, 395, 100, 60);

  ellipse(360, 340, 100, 100);
  rect(310, 240, 100, 100);
  pop();

}

function scene_three() {
  background(56, 31, 0)

  noStroke()
  //bedside table
  fill(66, 36, 0);
  ellipse(340, 340, 500, 500);

  //phone
  push();
  fill(191, 148, 228)
  rect(400, 200, 130, 250, 5)
  fill(flashcolor)
  rect(405, 205, 120, 240, 5)
  fill(0, 22, 56)
  ellipse(465, 220, 10, 10)
  pop();

  //phone charger
  push()
  fill(0, 0, 0)
  rect(260, 300, 5, 400)
  fill(0, 0, 0)
  ellipse(260, 330, 130, 130)
  fill(255, 194, 28)
  ellipse(260, 330, 110, 110)
  fill(0, 0, 0)
  ellipse(260, 330, 100, 100)
  pop()

}

function scene_four() {
  background(56, 31, 0)

  noStroke()
  //bedside table
  fill(66, 36, 0);
  ellipse(340, 340, 500, 500);

  //phone
  push();
  translate(random(-shakes, shakes), random(-shakes, shakes))
  fill(191, 148, 228)
  rect(400, 200, 130, 250, 5)
  fill(flashcolor)
  rect(405, 205, 120, 240, 5)
  fill(0, 22, 56)
  ellipse(465, 220, 10, 10)
  pop();

  //phone charger
  push()
  fill(0, 0, 0)
  rect(260, 300, 5, 400)
  fill(0, 0, 0)
  ellipse(260, 330, 130, 130)
  fill(255, 194, 28)
  ellipse(260, 330, 110, 110)
  fill(0, 0, 0)
  ellipse(260, 330, 100, 100)
  pop()

  if (flash % 10 == 0) {
    flashcolor = "#ff0000"

  } else {
    flashcolor = "#000000"
  }

}

function sleeping_bedroom() {
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

function scene_five() {
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

  //bed covers
  fill(237, 237, 237);
  ellipse(200, 510, 200, 100);
  rect(100, 510, 200, 100, 5);

  //girl
  push()
  translate(0, 90)
  fill(48, 21, 7);
  ellipse(200, 505, 35, 35)
  rect(185, 505, 30, 75)
  ellipse(200, 580, 30, 30)
  pop()
  fill(184, 244, 255)
  rect(165, 450, 70, 150)
  fill(48, 21, 7);
  ellipse(200, 440, 90, 90);
  fill(0, 0, 0);
  ellipse(170, 440, 5, 15);
  ellipse(230, 420, 60, 60);
  fill(48, 21, 7);
  ellipse(200, 505, 35, 35)
  rect(185, 505, 30, 75)
  ellipse(200, 580, 30, 30)


  //bedside table
  fill(66, 36, 0);
  rect(30, 565, 90, 15);
  rect(65, 570, 15, 100);
  rect(58, 665, 30, 20);

  //phone
  push()
  translate(random(-1, 1), random(-1, 1))
  fill(0, 0, 0);
  rect(60, 560, 45, 5);
  pop()

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

function scene_six() {
  background(56, 31, 0)

  noStroke()
  //bedside table
  fill(66, 36, 0);
  ellipse(340, 340, 500, 500);


  //phone charger
  push()
  fill(0, 0, 0)
  rect(260, 300, 5, 400)
  fill(0, 0, 0)
  ellipse(260, 330, 130, 130)
  fill(255, 194, 28)
  ellipse(260, 330, 110, 110)
  fill(0, 0, 0)
  ellipse(260, 330, 100, 100)
  pop()

  //phone
  push()
  translate(hand_movement, 0)
  fill(46, 21, 0)
  ellipse(800, 300, 100, 100)
  rect(800, 250, 450, 100)
  pop()

  //phone
  push();
  translate(random(-shakes2, shakes2), random(-shakes2, shakes2))
  translate(phone_movement, 0)
  fill(191, 148, 228)
  rect(400, 200, 130, 250, 5)
  fill(flashcolor)
  rect(405, 205, 120, 240, 5)
  fill(0, 22, 56)
  ellipse(465, 220, 10, 10)
  pop();

  if (phoneoncharger == false) {
    hand_movement -= 2
    if (hand_movement <= -300) {
      phone_movement -= 2
    }
  }

  if (hand_movement == -500 && phoneoncharger == false) {
    phoneoncharger = true
    shakes2 = 0
  }

  if (hand_movement <= 0 && phoneoncharger == true) {
    hand_movement += 2
  }

}

function scene_seven() {
  background(56, 31, 0)

  noStroke()
  //bedside table
  fill(66, 36, 0);
  ellipse(340, 340, 500, 500);


  //phone charger
  push()
  fill(0, 0, 0)
  rect(260, 300, 5, 400)
  fill(0, 0, 0)
  ellipse(260, 330, 130, 130)
  fill(255, 194, 28)
  ellipse(260, 330, 110, 110)
  fill(0, 0, 0)
  ellipse(260, 330, 100, 100)
  pop()

  push()
  translate(random(-shakes3, shakes3), random(-shakes3, shakes3))
  push()
  //phone
  translate(-200, 0)
  fill(191, 148, 228)
  rect(400, 200, 130, 250, 5)
  fill(flashcolor)
  rect(405, 205, 120, 240, 5)
  fill(0, 22, 56)
  ellipse(465, 220, 10, 10)
  pop();

  //battery levels
  fill(33, 255, 33)
  noStroke()
  rect(225, b1, 20, 40, 5)
  rect(250, b2, 20, 40, 5)
  rect(275, b3, 20, 40, 5)
  rect(300, b4, 20, 40, 5)

  rect(210, b5, 20, 40, 5)
  rect(235, b6, 20, 40, 5)
  rect(260, b7, 20, 40, 5)
  rect(285, b8, 20, 40, 5)
  rect(310, b9, 15, 40, 5)

  rect(210, b10, 20, 40, 5)
  rect(235, b11, 20, 40, 5)
  rect(260, b12, 20, 40, 5)
  rect(285, b13, 20, 40, 5)
  rect(310, b14, 15, 40, 5)



  //battery symbol
  stroke(255, 255, 255)
  strokeWeight(5)
  noFill()
  rect(220, 300, 80, 50, 10)
  rect(300, 308, 15, 30, 5)

  pop()

  if (frameCount == 2600) {
    b1 = 305
  }

  if (frameCount == 2800) {
    b2 = 305
  }

  if (frameCount == 3000) {
    b3 = 305
  }

  if (frameCount == 3200) {
    b4 = 305
    shakes3 = 1
  }

  if (frameCount == 3300) {
    b5 = 355
  }

  if (frameCount == 3400) {
    b6 = 355
  }

  if (frameCount == 3500) {
    b7 = 355
    shakes3 = 10
  }

  if (frameCount == 3550) {
    b8 = 355
  }

  if (frameCount == 3600) {
    b9 = 355
  }

  if (frameCount == 3650) {
    b10 = 400
    shakes3 = 20
  }

  if (frameCount == 3670) {
    b11 = 400
  }

  if (frameCount == 3690) {
    b12 = 400
    shakes3 = 30
  }

  if (frameCount == 3710) {
    b13 = 400
  }

  if (frameCount == 3730) {
    b14 = 400
  }


}

function scene_eight() {
  background(194, 112, 190);

  noStroke()

  fill(48, 21, 7);
  ellipse(100, 650, 200, 200)
  ellipse(600, 650, 200, 200)

  fill(189, 255, 242)
  rect(140, 300, 400, 500)

  fill(0, 0, 0)
  ellipse(150, 200, 400, 400)
  ellipse(550, 200, 400, 400)

  fill(48, 21, 7);
  ellipse(340, 400, 500, 500)

  //eyes
  fill(eye_color)
  ellipse(250, 300, 50, 100)
  ellipse(450, 300, 50, 100)

  if (frameCount == 3810) {
    eye_color = "#301507"
  }

  if (frameCount == 3830) {
    eye_color = "#000000"
  }

  if (frameCount == 3850) {
    eye_color = "#301507"
  }

  if (frameCount == 3870) {
    eye_color = "#000000"
  }

}