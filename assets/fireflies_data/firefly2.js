let maxNum = 1000;
let numFireflies = 100;
let normK = 0.0;
let K = 0.011;
let fireflies = [];
let sum = new Array(maxNum);

class Firefly {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D().mult(0.2);
        this.initPhase = random(TWO_PI); // Start at a random phase
        this.pulsePhase = this.initPhase;
        this.natural = random(0.01, 0.03);
        this.rad = round(random(1, 2));
        this.brightness = this.rad * random(0.8, 1);
    }
    
    move() {
        // update velocity or randomly stop
        if (random(0, 1) < 0.4) {
	    let angleChange = random(-PI / 8, PI / 8);
	    this.velocity.rotate(angleChange);
        }
        this.position.add(this.velocity);
        // Wrap around edges
        this.position.x = (this.position.x + width) % width;
        this.position.y = (this.position.y + height) % height;
    }
    
    kuramoto(tot) {
        this.pulsePhase = this.pulsePhase + 1.0 * ((K * tot / numFireflies) + this.natural);
    }
    
    display() {
        // Glow effect
        let pulse = constrain((4 * sin(this.pulsePhase) - 3), 0, 1);
        let glowSize1 = this.rad * 4; // Adjust for larger or smaller glow
        let glowSize2 = this.rad * 8; // Adjust for larger or smaller glow
        let glowAlpha1 = int(pulse * 60); // Adjust alpha for more or less glow
        let glowAlpha2 = int(pulse * 20); // Adjust alpha for more or less glow
        
        // Draw the glow
        fill(255, 255, 100, glowAlpha1); // Soft yellow with alpha for glow
        noStroke();
        ellipse(this.position.x, this.position.y, glowSize1, glowSize1);
        fill(255, 255, 100, glowAlpha2); // Soft yellow with alpha for glow
        noStroke();
        ellipse(this.position.x, this.position.y, glowSize2, glowSize2);
	
        // Draw the firefly
        fill(255, 255, 0, pulse * this.brightness * 255);
        ellipse(this.position.x, this.position.y, this.rad * 2, this.rad * 2);
    }
}

let bgImage;

function setup() {
    bgImage = loadImage('/assets/fireflies_data/bg2.png');
    const cnv = createCanvas(600, 400);
    cnv.parent('sketch-holder');
    cnv.style('margin-top', '15px');
    cnv.style('margin-left', '100px');
    for (let i = 0; i < 100; i++) {
        fireflies.push(new Firefly());
    }
}

function draw() {
    background(bgImage);
    let coherence = 0;
    let sines = 0;
    let cosines = 0;
    for (let i = 0; i < numFireflies; i++) {
	sum[i] = 0;
	for (let j = 0; j < numFireflies; j++) {
	    sum[i] += sin(fireflies[j].pulsePhase - fireflies[i].pulsePhase);
	}
    }
    
    // Calculate phase coherence
    for (let i = 0; i < numFireflies; i++) {
	sines += sin(fireflies[i].pulsePhase);
	cosines += cos(fireflies[i].pulsePhase);
    }
    
    coherence = (pow(sines, 2) + pow(cosines, 2)) / pow(numFireflies, 2);
    
    for (let i = 0; i < numFireflies; i++) {
	let firefly = fireflies[i];
	firefly.move();
	firefly.display();
	firefly.kuramoto(sum[i]);
    }
    
    // Displaying text
    fill(255);
    textSize(13);
    text("Fireflies: " + numFireflies, 10, 20);
    let roundK = round(1000 * K);
    text("k*N: " + roundK + " (1 e-3)", 10, 35);
    let roundPC = round(100 * coherence) / 100.0;
    text("Coherence: " + roundPC, 10, 50);
}
