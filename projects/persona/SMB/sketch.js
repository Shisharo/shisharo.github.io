"use strict";
let res = 16;
let w = 30;
let h = 20;
let stage1 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -1, -2, -3, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, -4, -5, -6, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, -1, -2, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, -4, -5, -6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 1, 1, 0, -7, -8, -9, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1]
]
let stage2 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, -1, -2, -3, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, -4, -5, -6, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, -1, -2, -3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 4, 0],
	[0, 0, 0, 0, -4, -5, -6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 3, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 2, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 1, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 0, 0, 0, 0, 2, 0, 1, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 1, 1]
]

let stage3 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0],
	[0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 4],
	[0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 3],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
let stage4 = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
	[0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
	[0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0],
	[0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 2, 2, 0, 0, 0],
	[0, 1, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
	[0, 1, 0, 0, 0, 1, 0, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]
let stage = [stage1, stage2, stage3, stage4];
let currentStage = 0;

let mario = [],
	qmblock, grblock, block, flagpole, flagtop, gameover, cloud = [],
	bush = [];

let at = 0;

let rightPressed = false,
	leftPressed = false,
	currentBlock = 1;

function preload() {
	mario[0] = loadImage("mariorx0.png");
	mario[1] = loadImage("mariolx0.png");
	mario[2] = loadImage("mariorx1.png");
	mario[3] = loadImage("mariorx2.png");
	mario[4] = loadImage("mariorx3.png");
	mario[5] = loadImage("mariolx1.png");
	mario[6] = loadImage("mariolx2.png");
	mario[7] = loadImage("mariolx3.png");
	mario[8] = loadImage("mariojmr.png");
	mario[9] = loadImage("mariojml.png");
	mario[10] = loadImage("mariostl.png");
	mario[11] = loadImage("mariostr.png");
	grblock = loadImage("ground.png");
	block = loadImage("block.png")
	flagpole = loadImage("flagpole.png");
	flagtop = loadImage("flagtop.png");
	gameover = loadImage("gameover.png");
	cloud[0] = loadImage("cloud1.png");
	cloud[1] = loadImage("cloud2.png");
	cloud[2] = loadImage("cloud3.png");
	cloud[3] = loadImage("cloud4.png");
	cloud[4] = loadImage("cloud5.png");
	cloud[5] = loadImage("cloud6.png");
	bush[0] = loadImage("bush1.png");
	bush[1] = loadImage("bush2.png");
	bush[2] = loadImage("bush3.png");
}

function setup() {
	canvas = createCanvas(w * res, h * res);
}

let playerPosition = new p5.Vector(2 * res, 18 * res);
let playerVelocity = new p5.Vector(0, 0);
let playerAcceleration = new p5.Vector(0, 0.5);

let devMode = false;
let onGround = false;

let wr = false,
	wl = false,
	r = true,
	l = false;

function draw() {
	game();
	if (playerPosition.y + playerVelocity.y > height - res - 2) {
		if (currentStage == 2) {
			playerPosition.y = height - res - 10;
			playerVelocity.y = -2;
		} else {
			gameOver();
		}
	}
	if (currentStage == 3 && devMode && mouseX > 0 && mouseX < width && mouseY > 0 && mouseY < height) {
		stroke(255, 255, 0);
		noFill();
		rect(floor(mouseX / res) * res, floor(mouseY / res) * res, res, res);
		if (leftPressed) {
			stage[currentStage][floor(mouseY / res)][floor(mouseX / res)] = currentBlock;
		}
		if (rightPressed) {
			stage[currentStage][floor(mouseY / res)][floor(mouseX / res)] = 0;
		}
		switch (currentBlock) {
			case -1:
				image(cloud[0], 0, 0, res, res);
				break;
			case -2:
				image(cloud[1], 0, 0, res, res);
				break;
			case -3:
				image(cloud[2], 0, 0, res, res);
				break;
			case -4:
				image(cloud[3], 0, 0, res, res);
				break;
			case -5:
				image(cloud[4], 0, 0, res, res);
				break;
			case -6:
				image(cloud[5], 0, 0, res, res);
				break;
				break;
			case -7:
				image(bush[0], 0, 0, res, res);
				break;
				break;
			case -8:
				image(bush[1], 0, 0, res, res);
				break;
				break;
			case -9:
				image(bush[2], 0, 0, res, res);
				break;
			case 0:
				break;
			case 1:
				image(grblock, 0, 0, res, res);
				break;
			case 2:
				image(block, 0, 0, res, res);
				break;
			case 3:
				image(flagpole, 0, 0, res, res);
				break;
			case 4:
				image(flagtop, 0, 0, res, res);
				break;
		}
	}
	if (playerPosition.x < 0) {
		playerPosition.x = 0;
		playerVelocity.x = 0;
		playerAcceleration.x = 0;
	} else if (playerPosition.x > width - res) {
		playerPosition.x = width - res;
		playerVelocity.x = 0;
		playerAcceleration.x = 0;
	}
}

function game() {
	canvas.position(windowWidth / 2 - width / 2, windowHeight / 2 - height / 2);
	background(148, 148, 255);
	noStroke();
	for (let x = 0; x < w; x++) {
		for (let y = 0; y < h; y++) {
			switch (stage[currentStage][y][x]) {
				case -1:
					image(cloud[-stage[currentStage][y][x] - 1], x * res, y * res, res, res);
					break;
				case -2:
					image(cloud[-stage[currentStage][y][x] - 1], x * res, y * res, res, res);
					break;
				case -3:
					image(cloud[-stage[currentStage][y][x] - 1], x * res, y * res, res, res);
					break;
				case -4:
					image(cloud[-stage[currentStage][y][x] - 1], x * res, y * res, res, res);
					break;
				case -5:
					image(cloud[-stage[currentStage][y][x] - 1], x * res, y * res, res, res);
					break;
				case -6:
					image(cloud[-stage[currentStage][y][x] - 1], x * res, y * res, res, res);
					break;
					break;
				case -7:
					image(bush[-stage[currentStage][y][x] - 7], x * res, y * res, res, res);
					break;
					break;
				case -8:
					image(bush[-stage[currentStage][y][x] - 7], x * res, y * res, res, res);
					break;
					break;
				case -9:
					image(bush[-stage[currentStage][y][x] - 7], x * res, y * res, res, res);
					break;
				case 0:
					break;
				case 1:
					image(grblock, x * res, y * res, res, res);
					break;
				case 2:
					image(block, x * res, y * res, res, res);
					break;
				case 3:
					image(flagpole, x * res, y * res, res, res);
					break;
				case 4:
					image(flagtop, x * res, y * res, res, res);
					break;
			}
		}
	}
	fill(255, 255, 0);
	if (wr) {
		playerAcceleration.x = .1;
	} else if (wl) {
		playerAcceleration.x = -.1;
	} else {
		playerAcceleration.x = 0;
		playerVelocity.x *= 0.9;
	}
	playerPosition.add(playerVelocity);
	playerVelocity.add(playerAcceleration);
	playerVelocity.x = playerVelocity.x > 4 ? 4 : playerVelocity.x;
	playerVelocity.x = playerVelocity.x < -4 ? -4 : playerVelocity.x;
	if (onGround)
		playerPosition.y += 0.1;
	if (playerPosition.y >= 0) {
		if (collision(stage[currentStage][ceil((playerPosition.y + res) / res) - 1][floor((playerPosition.x + res - 0.2) / res)]) || collision(stage[currentStage][ceil((playerPosition.y + res) / res) - 1][floor((playerPosition.x + res) / res) - 1])) {
			playerVelocity.y = 0;
			playerPosition.y = floor(playerPosition.y / res) * res;
			onGround = true;
		} else {
			onGround = false;
		}
		if (collision(stage[currentStage][floor((playerPosition.y + res) / res) - 1][floor((playerPosition.x + res - 0.2) / res)]) || collision(stage[currentStage][floor((playerPosition.y + res) / res) - 1][floor((playerPosition.x + res) / res) - 1])) {
			playerVelocity.y = 0;
			playerPosition.y = ceil(playerPosition.y / res) * res;
		}
		if (collision(stage[currentStage][floor((playerPosition.y + res) / res) - 1][floor((playerPosition.x + res) / res) - 1])) {
			playerVelocity.x = 0;
			playerPosition.x = ceil(playerPosition.x / res) * res;
		}
		if (collision(stage[currentStage][floor((playerPosition.y + res) / res) - 1][ceil((playerPosition.x + res) / res) - 1])) {
			playerVelocity.x = 0;
			playerPosition.x = floor(playerPosition.x / res) * res;
		}
		if (stage[currentStage][ceil((playerPosition.y + res) / res) - 1][floor((playerPosition.x + res - 0.2) / res)] == 3 || stage[currentStage][ceil((playerPosition.y + res) / res) - 1][floor((playerPosition.x + res - 0.2) / res)] == 4) {
			currentStage++;
			playerPosition.set(2 * res, 18 * res);
		}
	}
	animate(playerPosition.x, playerPosition.y, playerVelocity.x, playerVelocity.y);
}

function animate(px, py, pvx, pvy) {
	let mix = 0;
	let sp = 0;
	if (wl || l) {
		mix = 1;
		if (pvx < -0.5) {
			mix = 5 + at;
			sp = 20;
			if (pvx < -2)
				sp = 10;
			if (pvx < -3.5)
				sp = 5;
		}
		if (pvx > 0.5)
			mix = 11;
		if (pvy != 0)
			mix = 9;
	} else {
		mix = 0;
		if (pvx > 0.5) {
			mix = 2 + at;
			sp = 20;
			if (pvx > 2)
				sp = 10;
			if (pvx > 3.5)
				sp = 5;
		}
		if (pvx < -0.5)
			mix = 10;
		if (pvy != 0)
			mix = 8;
	}
	if (frameCount % sp == 0)
		at = at > 1 ? 0 : at + 1;
	image(mario[mix], px, py);
}

function gameOver() {
	background(0);
	image(gameover, width / 2 - 69, height / 2 - 7);
	noLoop();
}

function collision(ix) {
	switch (ix) {
		case 1:
			return true;
		case 2:
			return true;
	}
	return false;
}

function keyPressed() {
	if (keyCode == 32 && onGround) {
		playerVelocity.y -= 9;
	}
	if (keyCode == 68) {
		wr = true;
		r = true;
		l = false;
	}
	if (keyCode == 65) {
		wl = true;
		r = false;
		l = true;
	}
	if (keyCode == 80 && currentStage == 3) {
		devMode = !devMode;
	}
}

function keyReleased() {
	if (keyCode == 68) {
		wr = false;
	}
	if (keyCode == 65) {
		wl = false;
	}
}

function mousePressed() {
	if (mouseButton == LEFT) {
		leftPressed = true;
	}
	if (mouseButton == RIGHT) {
		rightPressed = true;
	}
}

function mouseReleased() {
	if (mouseButton == LEFT) {
		leftPressed = false;
	}
	if (mouseButton == RIGHT) {
		rightPressed = false;
	}
}

function mouseWheel(e) {
	if (e.delta < 0) {
		currentBlock++;
		if (currentBlock == 0)
			currentBlock++;
		if (currentBlock > 2)
			currentBlock = 2;
	} else {
		currentBlock--;
		if (currentBlock == 0)
			currentBlock--;
		if (currentBlock < -9)
			currentBlock = -9;
	}
}
