"use strict";
let res = 100,
  w, h;
let tp, sd, bm;
let mk, mkt;
let worldArray = [];
let buildArray = [];
let bg;

function preload() {
  bm = loadImage("https://theboyz.dns.army/projects/minecraft-info/res/1.png");
  tp = loadImage("https://theboyz.dns.army/projects/minecraft-info/res/2.png");
  sd = loadImage("https://theboyz.dns.army/projects/minecraft-info/res/3.png");
  mk = loadModel("https://theboyz.dns.army/projects/minecraft-info/res/steve.obj", true);
  mkt = loadImage("https://theboyz.dns.army/projects/minecraft-info/res/steve.png");
  /*createImage(windowWidth, windowHeight);
    bg.loadPixels();
    for (let yi = 0; yi < windowHeight; yi++) {
      for (let xi = 0; xi < windowWidth; xi++) {
        bg.set(xi, yi, [255 / 2.0 - dist(xi, yi, windowWidth, windowHeight) / windowWidth * 255 / 2.0, 0, 255 - dist(xi, yi, windowWidth, windowHeight) / windowWidth * 255 / 2.0, 255]);
        let temp = round(random(300)) == 0 ? true : false;
        if (temp) {
          bg.set(xi, yi, [random(100, 255), 255, random(100, 255), 255]);
        }
      }
    }
    bg.updatePixels();*/
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  w = windowWidth * 1.2 / res + 1;
  h = windowHeight * 1.2 / res + 1;
  for (let i = 0; i < w; i++) {
    worldArray[i] = [];
  }
  createWorldArray();
  /*bg.loadPixels();
  for (let yi = 0; yi < windowHeight; yi++) {
    for (let xi = 0; xi < windowWidth; xi++) {
      bg.set(xi, yi, [255 / 2.0 - dist(xi, yi, windowWidth, windowHeight) / windowWidth * 255 / 2.0, 0, 255 - dist(xi, yi, windowWidth, windowHeight) / windowWidth * 255 / 2.0, 255]);
      let temp = round(random(300)) == 0 ? true : false;
      if (temp) {
        bg.set(xi, yi, [random(100, 255), 255, random(100, 255), 255]);
      }
    }
  }
  bg.updatePixels();*/
}

function createWorldArray() {
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      worldArray[x][y] = round(noise(x / 10, y / 10) * 7);
    }
  }
}

function neighborState(x, y) {
  let b1 = false,
    b2 = false,
    b3 = false,
    b4 = false;
  if (worldArray[x][y] + buildArray[x][y] < worldArray[x + 1][y] + buildArray[x + 1][y]) {
    b1 = true;
  }
  if (worldArray[x][y] + buildArray[x][y] > worldArray[x + 1][y] + buildArray[x + 1][y]) {
    b2 = true;
  }
  if (worldArray[x][y] + buildArray[x][y] < worldArray[x][y + 1] + buildArray[x][y + 1]) {
    b3 = true;
  }
  if (worldArray[x][y] + buildArray[x][y] > worldArray[x][y + 1] + buildArray[x][y + 1]) {
    b4 = true;
  }
  if (!b1 && !b2 && !b3 && !b4) {
    return 0;
  }
  if (b1 && !b2 && !b3 && !b4) {
    return 1;
  }
  if (!b1 && b2 && !b3 && !b4) {
    return 2;
  }
  if (!b1 && !b2 && b3 && !b4) {
    return 3;
  }
  if (b1 && !b2 && b3 && !b4) {
    return 4;
  }
  if (!b1 && b2 && b3 && !b4) {
    return 5;
  }
  if (!b1 && !b2 && !b3 && b4) {
    return 6;
  }
  if (b1 && !b2 && !b3 && b4) {
    return 7;
  }
  if (!b1 && b2 && !b3 && b4) {
    return 8;
  }
}


function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.style('z-index', '-1');
  canvas.style('display', 'block');
  pixelDensity(1);
  w = windowWidth * 1.2 / res + 1;
  h = windowHeight * 1.2 / res + 1;
  for (let i = 0; i < w; i++) {
    worldArray[i] = [];
  }
  for (let i = 0; i < w; i++) {
    buildArray[i] = [];
  }
  noiseSeed(random(100000));
    createWorldArray();
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        buildArray[x][y] = 0;
      }
    }
}

let cx = 0;
let cy = 0;
let cz = 0;
let th = 0;
let wl = false;
let wu = false;
let wr = false;
let wd = false;
let sa = 0;

function draw() {
  canvas.position(0, 0);
  background(150, 200, 250);
  //background(bg);
  //image(bg, -windowWidth/2, -windowHeight/2, windowWidth, windowHeight);
  if (wl) cx -= 10;
  if (wu) cy += 10;
  if (wr) cx += 10;
  if (wd) cy -= 10;
  cx = cx < 0 ? 0 : cx;
  cy = cy < 0 ? 0 : cy;
  cx = cx > (w - 1) * res ? (w - 1) * res : cx;
  cy = cy > (h - 1) * res ? (h - 1) * res : cy;
  cz = worldArray[round(cx / res)][round(cy / res)] * res - 3 * res + buildArray[round(cx / res)][round(cy / res)] * res;
  noStroke(255);
  rotateX(PI / 4);
  translate(cx - w * res / 2, cy - h * res / 2, cz);
  //translate(cx, cy, cz);
  if (wl || wu || wr || wd)
    sa = sin(frameCount / 10) / 2;
  else
    sa = 0;
  rotateZ(sa + th);
  rotateX(PI / 2);
  texture(mkt);
  model(mk);
  rotateX(-PI / 2);
  rotateZ(-sa - th);
  //translate(-cx, -cy, -cz);
  translate(-(cx - w * res / 2), -(cy - h * res / 2), -cz);
  translate(-w * res / 2, -h * res / 2, -4 * res);
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w - 1; x++) {
      push();
      translate(x * res, y * res, worldArray[x][y] * res + buildArray[x][y] * res);
      texture(tp);
      plane(res);
      texture(sd);
      switch (neighborState(x, y)) {
        case 0:
          break;
        case 1:
          translate(res / 2, 0, res / 2);
          rotateX(-PI / 2);
          rotateY(PI / 2);
          plane(res);
          break;
        case 2:
          translate(res / 2, 0, -res / 2);
          rotateX(-PI / 2);
          rotateY(PI / 2);
          plane(res);
          break;
        case 3:
          translate(0, res / 2, res / 2);
          rotateY(PI);
          rotateX(PI / 2);
          plane(res);
          break;
        case 4:
          translate(res / 2, 0, res / 2);
          rotateX(-PI / 2);
          rotateY(PI / 2);
          plane(res);
          rotateY(-PI / 2);
          rotateX(PI / 2);
          translate(-res / 2, 0, -res / 2);
          translate(0, res / 2, res / 2);
          rotateY(PI);
          rotateX(PI / 2);
          plane(res);
          break;
        case 5:
          translate(res / 2, 0, -res / 2);
          rotateX(-PI / 2);
          rotateY(PI / 2);
          plane(res);
          rotateY(-PI / 2);
          rotateX(PI / 2);
          translate(-res / 2, 0, res / 2);
          translate(0, res / 2, res / 2);
          rotateY(PI);
          rotateX(PI / 2);
          plane(res);
          break;
        case 6:
          translate(0, res / 2, -res / 2);
          rotateY(PI);
          rotateX(PI / 2);
          plane(res);
          break;
        case 7:
          translate(res / 2, 0, res / 2);
          rotateX(-PI / 2);
          rotateY(PI / 2);
          plane(res);
          rotateY(-PI / 2);
          rotateX(PI / 2);
          translate(-res / 2, 0, -res / 2);
          translate(0, res / 2, -res / 2);
          rotateY(PI);
          rotateX(PI / 2);
          plane(res);
          break;
        case 8:
          translate(res / 2, 0, -res / 2);
          rotateX(-PI / 2);
          rotateY(PI / 2);
          plane(res);
          rotateY(-PI / 2);
          rotateX(PI / 2);
          translate(-res / 2, 0, res / 2);
          translate(0, res / 2, -res / 2);
          rotateY(PI);
          rotateX(PI / 2);
          plane(res);
          break;
      }
      pop();
    }
  }
}

function keyPressed() {
  if (keyCode == 71) {
    noiseSeed(random(100000));
    createWorldArray();
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        buildArray[x][y] = 0;
      }
    }
  }
  if (keyCode == 32)
    buildArray[round(cx / res)][round(cy / res)] += 1;
  if (keyCode == 16)
    buildArray[round(cx / res)][round(cy / res)] -= 1;
  if (keyCode == 65) {
    wl = true;
    th = -PI / 2;
  }
  if (keyCode == 83) {
    wu = true;
    th = PI;
  }
  if (keyCode == 68) {
    wr = true;
    th = PI / 2;
  }
  if (keyCode == 87) {
    wd = true;
    th = 0;
  }
}

function keyReleased() {
  if (keyCode == 65) {
    wl = false;
  }
  if (keyCode == 83) {
    wu = false;
  }
  if (keyCode == 68) {
    wr = false;
  }
  if (keyCode == 87) {
    wd = false;
  }
}
