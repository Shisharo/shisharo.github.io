"use strict";
let thickness = 100;
let x, y = 0,
  vx, rnd, btn1, btn2, btn3;
let x1, x2, x3, y1, y2, y3;
let speed = 4;
//THIS IS WORTH LIKE 10 AND A BILION YOU FOOOL
var sketch = function(p) {
  p.starSize = 200;
  p.star1 = p.loadImage("https://theboyz.dns.army/projects/persona/res/star1.png");
  p.star2 = p.loadImage("https://theboyz.dns.army/projects/persona/res/star2.png");
  p.setup = function() {
    p.cv = p.createCanvas(500, p.windowHeight);
    p.cv.style("z-index", "-1");
    for (p.i = 0; p.i < (p.width - p.starSize) * 2 * p.windowHeight; p.i++) {
      if (p.random(100000) > 99997) {
        p.a = random(TWO_PI);
        p.translate(p.i % (p.width - p.starSize) + p.starSize / 2, p.round(p.i / p.windowHeight) + p.starSize * 0.95 / 2);
        p.rotate(p.a);
        if (p.random(10) > 9) {
          p.image(p.star2, -p.starSize / 2, -p.starSize / 2 * 0.95, p.starSize, p.starSize * 0.95);
        } else {
          p.image(p.star1, -p.starSize / 2, -p.starSize / 2 * 0.95, p.starSize, p.starSize * 0.95);
        }
        p.rotate(-p.a);
        p.translate(-(p.i % (p.width - p.starSize)) - p.starSize / 2, -p.round(p.i / p.windowHeight) - p.starSize * 0.95 / 2);
      }
    }
    p.draw = function() {
      p.cv.position(p.windowWidth / 2 - 250);
    }
  }
}

var persona5 = new p5(sketch);

function setup() {
  canvas = createCanvas(500, windowHeight);
  canvas.style("z-index", "0");
  vx = random(-4, 4);
  rnd = floor(random(20));
  x = width / 2;
}

let t = 50;

function draw() {
  canvas.position(windowWidth / 2 - 250, 0);
  for (let i = 0; i < speed; i++) {
    stroke(0);
    line(x - thickness / 2, y, x + thickness / 2, y);
    stroke(255, 0, 0)
    line(x + (width / 2 - x) * .2 - thickness * 0.9 / 2, y - rnd, x + (width / 2 - x) * .2 + thickness * 0.9 / 2, y - rnd);
    y++;
    x += vx;
    if (random(100) > 98 && t < 0) {
      vx = random(-4, 4);
      t = 50;
    }
    if (x < thickness / 2 || x > width - thickness / 2) {
      vx *= -1
    }
    let temph = floor(height / 4);
    if (y == floor(height / 4)) {
      btn1 = createButton("Minecraft");
      btn1.mouseClicked(function why() {
        window.location = ('minecraft/index.html');
      });
      x1 = x - thickness;
      y1 = y;
    }
    if (y >= floor(height / 4)) {
      btn1.position(x1 + windowWidth / 2 - 250, y1 - 30);
    }
    if (y == 2 * floor(height / 4)) {
      btn2 = createButton("Super Mario Bros");
      btn2.mouseClicked(function why() {
        window.location = ('SMB/index.html');
      });
      x2 = x - thickness;
      y2 = y;
    }
    if (y >= 2 * floor(height / 4)) {
      btn2.position(x2 + windowWidth / 2 - 250, y2 - 30);
    }
    if (y == 3 * floor(height / 4)) {
      btn3 = createButton("Tetris");
      btn3.mouseClicked(function why() {
        window.location = ('Tetris/index.html');
      });
      x3 = x - thickness;
      y3 = y;
    }
    if (y >= 3 * floor(height / 4)) {
      btn3.position(x3 + windowWidth / 2 - 250, y3 - 30);
    }
    t--;
  }
}
