function FillTool() {
  let self = this;

  //set an icon and a name for the object
  self.icon = "assets/freehand.jpg";
  self.name = "FillTool";
  self.colour = ColourPalette(0, 0, 0, 255);

  self.draw = function () {
    if (mouseIsPressed) {
      floodFill(mouseX, mouseY);
    }
  };

  self.setColour = function (col) {
    self.colour = col;
  };

  function matchColour(pos, oldColour) {
    var current = getPixelData(pos.x, pos.y);
    return (
      current[0] === oldColour[0] &&
      current[1] === oldColour[1] &&
      current[2] === oldColour[2] &&
      current[3] === oldColour[3]
    );
  }

  function getKey(pos) {
    return "" + pos.x + "_" + pos.y;
  }

  function checkPixel(pos, positionSet) {
    return !positionSet.hasOwnProperty(getKey(pos));
  }

  function floodFill(xPos, yPos) {
    var stack = [];
    var pixelList = {};

    var first = { x: xPos, y: yPos };
    stack.push(first);
    pixelList[getKey(first)] = 1;

    //console.log( JSON.stringify(stack) );

    loadPixels();
    var firstColour = getPixelData(xPos, yPos);

    while (stack.length > 0) {
      var pos1 = stack.pop();

      setPixelData(pos1.x, pos1.y, self.colour);

      var up = { x: pos1.x, y: pos1.y - 1 };
      var dn = { x: pos1.x, y: pos1.y + 1 };
      var le = { x: pos1.x - 1, y: pos1.y };
      var ri = { x: pos1.x + 1, y: pos1.y };

      if (0 <= up.y && up.y < height && matchColour(up, firstColour))
        addPixelToDraw(up);
      if (0 <= dn.y && dn.y < height && matchColour(dn, firstColour))
        addPixelToDraw(dn);
      if (0 <= le.x && le.x < width && matchColour(le, firstColour))
        addPixelToDraw(le);
      if (0 <= ri.x && ri.x < width && matchColour(ri, firstColour))
        addPixelToDraw(ri);
    }

    updatePixels();

    //console.log( JSON.stringify(pixelList) );

    function addPixelToDraw(pos) {
      if (checkPixel(pos, pixelList)) {
        stack.push(pos);
        pixelList[getKey(pos)] = 1;
      }
    }
  }
}

function ColourPalette(r, g, b, a) {
  var self = this !== window ? this : {};
  if (arguments.length === 0) {
    self["0"] = 0;
    self["1"] = 0;
    self["2"] = 0;
    self["3"] = 0;
  } else if (arguments.length === 1) {
    self["0"] = r[0];
    self["1"] = r[1];
    self["2"] = r[2];
    self["3"] = r[3];
  } else if (arguments.length === 4) {
    self["0"] = r;
    self["1"] = g;
    self["2"] = b;
    self["3"] = a;
  } else {
    return null;
  }
  return self;
}

function getPixelData(x, y) {
  var colour = [];
  for (var i = 0; i < d; ++i) {
    for (var j = 0; j < d; ++j) {
      let idx = 4 * ((y * d + j) * width * d + (x * d + i));
      colour[0] = pixels[idx];
      colour[1] = pixels[idx + 1];
      colour[2] = pixels[idx + 2];
      colour[3] = pixels[idx + 3];
    }
  }
  return colour;
}

function setPixelData(x, y, colour) {
  for (var i = 0; i < d; ++i) {
    for (var j = 0; j < d; ++j) {
      let idx = 4 * ((y * d + j) * width * d + (x * d + i));
      pixels[idx] = colour[0];
      pixels[idx + 1] = colour[1];
      pixels[idx + 2] = colour[2];
      pixels[idx + 3] = colour[3];
    }
  }
}
