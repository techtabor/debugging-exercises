// Draw a circle in the middle of the screen
float circleX = width / 2;
float circleY = height / 2;

void setup() {
  size(300, 300);
}

void draw() {
  background(64);
  ellipse(circleX, circleY, 100, 100);
}
