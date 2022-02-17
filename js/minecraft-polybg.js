let vd = 35;

function windowResized () {
	resizeCanvas(windowWidth, document.body.scrollHeight);
}

function setup() {
	textAlign(CENTER, CENTER);
	canvas = createCanvas(windowWidth, document.body.scrollHeight);
	canvas.style('z-index', '-1');
	canvas.style('display', 'block');
	pixelDensity(1);
	noiseSeed(random(100000));
}

function draw() {
	let wp = window.pageYOffset;
	canvas.position(0, 0);
	noStroke();
	//stroke(0, 255, 0);
	fill(255, 0, 0);
	fc = frameCount/500;
	for (let y = -vd; y < document.body.scrollHeight + vd; y += vd) {
		beginShape(TRIANGLE_STRIP);
		for (let x = -vd; x < windowWidth + vd; x += vd) {
			let val = abs(windowWidth/2 - x) - windowWidth/2 + windowWidth / 400 * vd;
			if (val > 0) {
				let r = most(val, 0);
				let g = map(r, 255, 0, 255, 27);
				let b = map(r, 255, 0, 255, 33);
				r = map(r, 255, 0, 255, 24);
				fill(r, g, b);
				vertex(x + noise(x + (y) * windowWidth, fc) * vd, y + noise(x + (y) * windowWidth + 1, fc) * vd);
				vertex(x + noise(x + (y + vd) * windowWidth, fc) * vd, (y + vd) + noise(x + (y + vd) * windowWidth + 1, fc) * vd);
			}
		}
		endShape();
	}
}

function most (n1, n2) {
	return n1 > n2 ? n1 : n2;
}