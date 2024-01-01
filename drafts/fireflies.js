<script>
class Firefly {
    constructor() {
        this.position = createVector(random(width), random(height));
        this.velocity = p5.Vector.random2D();
        this.brightness = random(0.5, 1);
        this.pulseSpeed = random(0.05, 0.1);
        this.pulsePhase = random(TWO_PI);
    }

    move() {
        let angleChange = random(-PI / 8, PI / 8);
        this.velocity.rotate(angleChange);
        this.velocity.limit(3);
        this.position.add(this.velocity);
        this.position.x = (this.position.x + width) % width;
        this.position.y = (this.position.y + height) % height;
    }

    display() {
        let glowSize = 20;
        let pulse = (sin(frameCount * this.pulseSpeed + this.pulsePhase) + 1) / 2;
        let glowAlpha = int(pulse * 60);

        fill(255, 255, 100, glowAlpha);
        noStroke();
        ellipse(this.position.x, this.position.y, glowSize, glowSize);

        fill(255, 255, 0, pulse * this.brightness * 255);
        ellipse(this.position.x, this.position.y, 8, 8);
    }
}

let fireflies = [];

function setup() {
    createCanvas(800, 600);
    for (let i = 0; i < 100; i++) {
        fireflies.push(new Firefly());
    }
}

function draw() {
    background(0);
    for (let firefly of fireflies) {
        firefly.move();
        firefly.display();
    }
}
</script>
