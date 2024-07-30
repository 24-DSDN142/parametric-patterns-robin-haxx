//your parameter variables go here!

// list of colour options
var cyanCol = [28, 232, 229];
var goldCol = [255, 235, 54];
var purpleCol = [45, 27, 99];
var maroonCol = [46, 10, 22];
var blackCol = [0,0,0];


var canvasX = 300; // default 300
var canvasY = 200; // default 200

var secondaryCol = blackCol; // default maroonCol
var primaryCol = blackCol; // default blackCol
var altCol = maroonCol; // default blackCol
var decoCol = goldCol;  // default goldCol

var littleCircles = true; // default true
var secondColour = true; // default true

var sizeMod = 0.4; // default 0.4


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GLIDE_WALLPAPER);
  pWallpaper.resolution(NINE_PORTRAIT);
  pWallpaper.show_guide(false); //set this to false when you're ready to print
  

  strokeCap(PROJECT);

  //Grid settings
  pWallpaper.grid_settings.cell_width  = canvasX;
  pWallpaper.grid_settings.cell_height = canvasY;
  pWallpaper.grid_settings.row_offset  = 100;
  BezierHelper.useBezierTool(pWallpaper);
}

// Press 'A' to add a vertex at the mouse position, and 'R' to remove the last vertex created.
// In the top left hand corner, there is a settings box that will appear when you hover over it.

// - You can show/hide the tool by toggling the 'Show Tool' checkbox.

// - To add a point manually, press the 'Add Point' button and enter the coordinate into the popup.

// - Press the 'Save Curve' button to save the curve. Copying the code will also save the curve. 
// This means that when you refresh the page and the curve resets to the default, you can load 
// in the last curve you created.

// - Retrieve the saved curve by pressing the 'Load Last Curve' button.

// - Press the 'Copy Code' button to copy the code required to draw the curve to the clipboard. 
// This will only work if you have a valid number of control points.

function wallpaper_background() {
  background(secondaryCol);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  BezierHelper.storeTransform();
  // parameters: x position, y position, size, colour
  //drawGlyph(canvasX*0.20 , canvasY*0.80, canvasY*0.70, primaryCol );
  drawGlyph(canvasX*.50,canvasY*.500, 300*sizeMod, primaryCol, 0);
  drawGlyph(canvasX*.80,20, 200*sizeMod, primaryCol, 90);
  //drawGlyph(30,60, 500*sizeMod, primaryCol);
  //drawGlyph(canvasX*0.25 , canvasY*0.20, canvasY*0.75, primaryCol  );
  //drawGlyph(canvasX*0.22 , canvasY*0.55, canvasY*0.40, primaryCol,   );

}


function drawGlyph(xPos,yPos,glyphSize,glyphPrimary, rotation){
  push();
  rotate (rotation)
  //big outer circles
  stroke(glyphPrimary);
  strokeWeight(glyphSize * 0.01 * 1);
  noFill();
  circle(xPos, yPos, glyphSize * 0.9);
  circle(xPos, yPos, glyphSize * 0.75);

  //quarter-circle "pie slice" filled in, covers a quarter of one of the outer circles
  fill(secondaryCol);
  arc(xPos, yPos, glyphSize * 0.9, glyphSize * 0.9, 225,315);

  //line that gets overlapped by more other stuff
  strokeWeight(glyphSize * 0.01);
  line(xPos-glyphSize*0.3, yPos+glyphSize*0.3,xPos+glyphSize*0.3,yPos-glyphSize*0.3);
  circle(xPos, yPos, glyphSize * 0.3); // this circle drawn on top of just one of the X lines
  //line that overlaps larger central circle
  line(xPos-glyphSize*0.3,yPos-glyphSize*0.3, xPos+glyphSize*0.3, yPos+glyphSize*0.3);


  if (secondColour){
    stroke(altCol);
    //fill(altCol);
  }


  // centermost circle is drawn on top of X lines
  circle(xPos+glyphSize*.02, yPos-glyphSize*.02, glyphSize*.23);
  noFill();
  circle(xPos-glyphSize*.05, yPos+glyphSize*.30, glyphSize*.2);

  // thicker circle outlines
  strokeWeight(glyphSize * 0.02);
  circle(xPos-glyphSize*.05, yPos-glyphSize*.20, glyphSize*.4);
  circle(xPos-glyphSize*.33, yPos+glyphSize*.10, glyphSize*.07);
  circle(xPos+glyphSize*.05, yPos-glyphSize*.05, glyphSize*.48);

  fill(altCol);
  beginShape();
  vertex(xPos+-10, yPos+67);
  bezierVertex(xPos+5, yPos+90, xPos+59, yPos+55, xPos+28, yPos+122);
  bezierVertex(xPos+135, yPos+74, xPos+127, yPos+-50, xPos+92, yPos+-75);
  bezierVertex(xPos+51, yPos+-96, xPos+40, yPos+-41, xPos+37, yPos+-117);
  bezierVertex(xPos+2, yPos+-61, xPos+0, yPos+-62, xPos+-17, yPos+-67);
  bezierVertex(xPos+11, yPos+-47, xPos+16, yPos+-76, xPos+40, yPos+-42);
  bezierVertex(xPos+74, yPos+-80, xPos+101, yPos+-28, xPos+56, yPos+24);
  bezierVertex(xPos+90, yPos+-7, xPos+102, yPos+35, xPos+62, yPos+33);
  bezierVertex(xPos+70, yPos+55, xPos+48, yPos+65, xPos+42, yPos+44);
  bezierVertex(xPos+12, yPos+79, xPos+3, yPos+69, xPos+-11, yPos+68);
  endShape();

  if (littleCircles){
  // little decorative bits
  strokeWeight(glyphSize * 0.01 * 1);
  fill(glyphPrimary);
  noStroke();
  if (secondColour){
    
    fill(decoCol);
  }
  circle(xPos-glyphSize*0.23,yPos-glyphSize*0.24, glyphSize * 0.16);
  circle(xPos-glyphSize*0.25,yPos+glyphSize*0.25, glyphSize * 0.08);
  circle(xPos+glyphSize*0.25,yPos+glyphSize*0.25, glyphSize * 0.10);
  circle(xPos+glyphSize*0.19,yPos-glyphSize*0.18, glyphSize * 0.09);
  circle(xPos-glyphSize*0.05,yPos+glyphSize*0.36, glyphSize * 0.09);
  }
  pop();

}