let size = 800;
//let dimFactor = Math.floor(Math.random() * 100);
let dimFactor = 20;
let ifMargin = true;
let margin = ifMargin ? dimFactor : 0;

const pairs = [[20, 30, PROJECT]];

function setup() {
  createCanvas(size, size);
  background(220);
  stroke(0, 0, 0);
  strokeCap(PROJECT); //ROUND, SQUARE, PROJECT
  strokeWeight(30);
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
  //rgb: [38, 70, 83],
  //for (let i = 0; i < 5; i++) {
  //let col = colors[i].rgb;
  //console.log(col[0]);
  //floodFill(createVector(400, 400), [38, 70, 83, 255]);
  //}
  floodFill(createVector(100, 100), colors[0].rgb);
  floodFill(createVector(250, 250), colors[1].rgb);
  floodFill(createVector(400, 400), colors[2].rgb);
  floodFill(createVector(550, 550), colors[3].rgb);
  floodFill(createVector(700, 700), colors[4].rgb);
}
