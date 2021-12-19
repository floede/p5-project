let size = 800;
let dimensionFactor = 4;
let margin = 5;

function setup() {
  createCanvas(size, size);
  background(220);
  stroke(0, 0, 0);
  strokeCap(SQUARE);
}

function getRandomInt() {
  return Math.floor(Math.random() * 2);
}

function draw() {
  for (let hPos = margin; hPos <= size - margin; hPos += 10) {
    for (let pos = 5 + getRandomInt() * 10; pos < size - margin; pos += 20) {
      line(pos, hPos, pos + 10, hPos);
    }
  }
  for (let vPos = margin; vPos <= size - margin; vPos += 10) {
    for (
      let pos = margin + getRandomInt() * 10;
      pos < size - margin;
      pos += 20
    ) {
      line(vPos, pos, vPos, pos + 10);
    }
  }
  noLoop();
  floodFill(createVector(size / 2, size / 2), [
    random(255),
    random(255),
    random(255),
    255,
  ]);
}
