PFont myFont;
PImage bg;

int maxNum = 200;
int numFireflies = 100;
float normK = 0.0;
float K = 0.0;
Firefly[] fireflies;
float[] sum = new float[maxNum];

class Firefly {
  PVector position;
  PVector velocity;
  float brightness;
  float pulsePhase;
  float initPhase;
  float natural;
  int rad;

  Firefly() {
    position = new PVector(random(width), random(height));
    velocity = PVector.random2D().mult(0.2);
    initPhase = random(TWO_PI); // Start at a random phase
    pulsePhase = initPhase;
    natural = random(0.01, 0.03);
    rad = round(random(1, 2));
    brightness = rad*random(0.8, 1);
  }

  void move() {
    // update velocity or randomly stop
    if (random(0, 1) < 0.4) {
      float angleChange = random(-PI / 8, PI / 8);
      velocity.rotate(angleChange);
    }
    position.add(velocity);
    // Wrap around edges
    if (position.x > width) position.x = 0;
    if (position.x < 0) position.x = width;
    if (position.y > height) position.y = 0;
    if (position.y < 0) position.y = height;
  }
  
  void kuramoto(float tot) {
     //pulsePhase = pulsePhase + 1.0*((normK * tot) + natural);
     pulsePhase = pulsePhase + 1.0*((K * tot/numFireflies) + natural);
  }

void display() {
  // Glow effect
  float pulse = constrain((4*sin(pulsePhase)-3), 0, 1);
  float glowSize1 = rad*4; // Adjust for larger or smaller glow
  float glowSize2 = rad*8; // Adjust for larger or smaller glow
  int glowAlpha1 = int(pulse * 60); // Adjust alpha for more or less glow
  int glowAlpha2 = int(pulse * 20); // Adjust alpha for more or less glow
  
  // Draw the glow
  fill(255, 255, 100, glowAlpha1); // Soft yellow with alpha for glow
  noStroke();
  ellipse(position.x, position.y, glowSize1, glowSize1);
  fill(255, 255, 100, glowAlpha2); // Soft yellow with alpha for glow
  noStroke();
  ellipse(position.x, position.y, glowSize2, glowSize2);

  // Draw the firefly
  fill(255, 255, 0, pulse * brightness * 255);
  ellipse(position.x, position.y, rad*2, rad*2);
}
}

void setup() {
  bg = loadImage("bg.png");
  
  size(600, 400);
  fireflies = new Firefly[numFireflies];
  for (int i = 0; i < numFireflies; i++) {
    fireflies[i] = new Firefly();
  }
  myFont = createFont("et-book-roman-line-figures.ttf", 18);
  textFont(myFont);
}

void draw() {
  background(bg);
  float coherence = 0;
  float sines = 0;
  float cosines = 0;
  for (int i = 0; i < numFireflies; i++) {
    sum[i] = 0;
    for (int j = 0; j < numFireflies; j++) {
        sum[i] = sum[i] + sin(fireflies[j].pulsePhase - fireflies[i].pulsePhase);
    }
  }
  // Calculate phase coherence
  for (int i = 0; i < numFireflies; i++) {
     sines = sines + sin(fireflies[i].pulsePhase);
     cosines = cosines + cos(fireflies[i].pulsePhase);
  }
  coherence = (pow(sines, 2) + pow(cosines, 2))/pow(numFireflies, 2);
  for (int i = 0; i < numFireflies; i++) {
    Firefly firefly = fireflies[i];
    firefly.move();
    firefly.display();
    firefly.kuramoto(sum[i]);
  }
  
// Set the text characteristics
  fill(255); // White color
  textSize(13); // Set text size
  text("Fireflies: " + numFireflies, 10, 20);
  float roundK = round(1000*K);
  text("mK: " + roundK, 10, 35);
  float roundPC = round(100*coherence)/100.0;
  text("Coherence: " + roundPC, 10, 50); 
}

void keyPressed() {
  if (keyCode == UP) {
    numFireflies = constrain(numFireflies + 5, 0, 200); // Increase by 5
  } else if (keyCode == DOWN) {
    numFireflies = constrain(numFireflies - 5, 0, 200); // Decrease by 5
  }
  
  // Reinitialize the array with the new size
  fireflies = new Firefly[numFireflies];
  for (int i = 0; i < numFireflies; i++) {
    fireflies[i] = new Firefly();
  }
  
if (keyCode == LEFT) {
    K = constrain(K - 0.001, 0, 0.1); // Decrease by 0.001
  } else if (keyCode == RIGHT) {
    K = constrain(K + 0.001, 0, 0.1); // Increase by 0.001
  }
}
