let size = 800;
//let dimFactor = Math.floor(Math.random() * 100);
let dimFactor = 200;
let strokeWidth = 100;
let ifMargin = false;
let marginVal = 0.5 * (strokeWidth + ((size - strokeWidth) % dimFactor));
console.log("MARGIN: ", marginVal);
let margin = ifMargin ? marginVal : -marginVal;

const palette = Math.floor(Math.random() * colors.length);
const colorArray = colors[palette];
const fillStyle = ["background", "lines", "both"];

let coordinates = [];

const pairs = [
  [20, 30, "PROJECT"],
  [50, 44, "PROJECT"],
  [50, 44, "SQUARE"],
  [50, 44, "PROJECT"],
  [200, 100, "ROUND"],
];

function getCoordinates() {
  return getRandomInt(Math.floor(size / dimFactor)) * dimFactor;
}

colorArray.forEach((elm, index) => {
  let innerArray = [];
  for (let j = 0; j < 2; j++) {
    innerArray[j] = getCoordinates();
  }
  coordinates[index] = innerArray;
});

function setup() {
  createCanvas(size, size);
  //smooth(8);
  background(220);
  stroke(20);
  strokeCap(ROUND); //ROUND, SQUARE, PROJECT
  strokeWeight(strokeWidth);
  noLoop();
}

function getRandomInt(factor) {
  let number = Math.floor(Math.random() * factor);
  //console.log("TEST RANDOM: ", number);
  return number;
}

function draw() {
  // Draw horizontal lines
  for (
    let hPos = margin;
    hPos < size - margin + strokeWidth;
    hPos += dimFactor
  ) {
    for (
      let pos = margin + getRandomInt(2) * dimFactor;
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
      let pos = margin + getRandomInt(2) * dimFactor;
      pos < size - margin;
      pos += 2 * dimFactor
    ) {
      line(vPos, pos, vPos, pos + dimFactor);
    }
  }

  for (let i = 0; i < coordinates.length; i++) {
    floodFill(createVector(...coordinates[i]), colors[palette][i].rgb);
  }
  filter(DILATE); //THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE or BLUR
}
