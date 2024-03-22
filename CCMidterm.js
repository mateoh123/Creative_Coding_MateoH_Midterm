var rain = [];

function setup() {
  createCanvas(700, 700);
  for (var i = 0; i < 200; i++) {
    rain[i] = new Rain();
  }
  
}

function draw() {
  background(0, 0, 0);
  house_exterior();
  for (var i = 0; i < 100; i++) {
    rain[i].show();
    rain[i].update();
  }

}

function house_exterior() {
  //ground
  noStroke();
  fill(110, 110, 110);
  rect(0, 660, 800, 40);

  //moon
  fill(237, 233, 230);
  ellipse(100, 100, 100, 100);
  fill(0, 0, 0);
  ellipse(110, 100, 100, 100);

  push();
  //main house
  fill(201, 179, 159);
  rect(410, 410, 250, 250);

  fill(64, 35, 9);
  rect(510, 560, 50, 100);
  fill(218, 165, 32);
  ellipse(550, 610, 10, 10);

  fill(74, 72, 72);
  rect(430, 460, 80, 80);
  rect(560, 460, 80, 80);

  fill(0, 0, 0);
  rect(435, 465, 70, 70);
  rect(565, 465, 70, 70);

  fill(74, 72, 72);
  rect(467, 460, 5, 80);
  rect(430, 497, 80, 5);
  rect(597, 460, 5, 80);
  rect(560, 497, 80, 5);

  //roof
  triangle(408, 410, 662, 410, 530, 300);
  pop();

  push();
  translate(-310, 0);
  //main house
  fill(204, 172, 143);
  rect(410, 410, 250, 250);

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

  push();
  translate(-620, 0);
  //main house
  fill(145, 106, 70);
  rect(410, 410, 250, 250);

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
