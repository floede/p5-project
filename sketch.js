let size = 800;
//let dimFactor = Math.floor(Math.random() * 100);
let dimFactor = 4;
let strokeWidth = 2;
let ifMargin = false;
let marginVal =
  0.5 * (dimFactor + strokeWidth + ((size - strokeWidth) % dimFactor));
let margin = ifMargin ? marginVal : -marginVal;
const palette = Math.floor(Math.random() * colors.length);

const pairs = [
  [20, 30, "PROJECT"],
  [50, 44, "PROJECT"],
  [50, 44, "SQUARE"],
  [50, 44, "PROJECT"],
];

function setup() {
  createCanvas(size, size);
  background(220);
  stroke(0, 0, 0);
  strokeCap(SQUARE); //ROUND, SQUARE, PROJECT
  strokeWeight(strokeWidth);
}

function getRandomInt() {
  return Math.floor(Math.random() * 2);
}

function draw() {
  // Draw horizontal lines
  for (
    let hPos = margin;
    hPos < size - margin + strokeWidth;
    hPos += dimFactor
  ) {
    for (
      let pos = margin + getRandomInt() * dimFactor;
      pos < size - margin;
      pos += 2 * dimFactor
    ) {
      line(pos, hPos, pos + dimFactor, hPos);
    }
  }
  // Draw vertical lines
  for (
    let vPos = margin;
    vPos < size - margin + strokeWidth;
    vPos += dimFactor
  ) {
    for (
      let pos = margin + getRandomInt() * dimFactor;
      pos < size - margin;
      pos += 2 * dimFactor
    ) {
      line(vPos, pos, vPos, pos + dimFactor);
    }
  }
  noLoop();
  //rgb: [38, 70, 83],
  //for (let i = 0; i < 5; i++) {
  //let col = colors[i].rgb;
  //console.log(col[0]);
  //floodFill(createVector(400, 400), [38, 70, 83, 255]);
  //}

  floodFill(createVector(100, 100), colors[palette][0].rgb);
  floodFill(createVector(250, 250), colors[palette][1].rgb);
  floodFill(createVector(400, 400), colors[palette][2].rgb);
  floodFill(createVector(550, 550), colors[palette][3].rgb);
  floodFill(createVector(700, 700), colors[palette][4].rgb);
}
