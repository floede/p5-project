let size = 800;
//let dimFactor = Math.floor(Math.random() * 100);
let dimFactor = 10;
let ifMargin = true;
let margin = ifMargin ? dimFactor : 0;

function setup() {
  createCanvas(size, size);
  background(220);
  stroke(0, 0, 0);
  strokeCap(SQUARE);
  strokeWeight(2);
}

function getRandomInt() {
  return Math.floor(Math.random() * 2);
}

function draw() {
  // Draw horizontal lines
  for (let hPos = margin; hPos < size - margin; hPos += 2 * dimFactor) {
    for (
      let pos = dimFactor + getRandomInt() * (2 * dimFactor);
      pos < size - margin;
      pos += 4 * dimFactor
    ) {
      line(pos, hPos, pos + 2 * dimFactor, hPos);
    }
  }
  // Draw vertical lines
  for (let vPos = margin; vPos < size - margin; vPos += 2 * dimFactor) {
    for (
      let pos = margin + getRandomInt() * (2 * dimFactor);
      pos < size - margin;
      pos += 4 * dimFactor
    ) {
      line(vPos, pos, vPos, pos + 2 * dimFactor);
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
