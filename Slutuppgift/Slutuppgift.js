
var canvas = document.querySelector("#myCanvas");
var context = canvas.getContext("2d");
var canvasPos = getPosition(canvas);
var mouseX = [];
var mouseY = [];
var color = "black";
var Draw = false;
var Size = 5;
var opacity = 1.0;
var i = 0;

canvas.addEventListener("mousedown", NowDraw);

function NowDraw() {
  Draw = true;
  Drawfunction();
}

canvas.addEventListener("mouseup", StopDraw);
canvas.addEventListener("mouseleave", StopDraw)

function StopDraw() {
  Draw = false;
  Drawfunction();
}

function Drawfunction() {
  if (Draw == true) {
    update();
  }
}

//Where the mouse is
canvas.addEventListener("mousemove", setMousePosition, false);

function setMousePosition(e) {
  i++;
  mouseX[i] = e.clientX - canvasPos.x;
  mouseY[i] = e.clientY - canvasPos.y;
}      

function getPosition(el) {
  var xPosition = 0;
  var yPosition = 0;
 
  while (el) {
    xPosition += (el.offsetLeft - el.scrollLeft + el.clientLeft);
    yPosition += (el.offsetTop - el.scrollTop + el.clientTop);
    el = el.offsetParent;
  }
  return {
    x: xPosition,
    y: yPosition
  };
}
//The drawing
function update() {
  context.beginPath();
  context.lineJoin = "round";
  context.strokeStyle = color;
  context.lineWidth = Size;
  context.globalAlpha = opacity;
  context.moveTo(mouseX[i-1], mouseY[i-1]);
  context.lineTo(mouseX[i], mouseY[i]);
  context.closePath();
  context.stroke();

  if (Draw == true) {
    requestAnimationFrame(update);
  }
}

var canvas2 = document.querySelector("#Showcircle");
var context2 = canvas2.getContext("2d");

function SHOWOFF() {

  circlesize = Size / 2;

  context2.clearRect(0, 0, canvas.width, canvas.height);

  context2.beginPath();
  context2.arc(50, 50, circlesize, 0, 2 * Math.PI);
  context2.fillStyle = color;
  context2.globalAlpha = opacity;
  context2.fill();
  context2.closePath();

  requestAnimationFrame(SHOWOFF);
}

SHOWOFF();



//Draw color

var blue = document.querySelector(".blue")

blue.addEventListener("click", colorchange_blue);

function colorchange_blue () {
  color = "blue";
}

var red = document.querySelector(".red")

red.addEventListener("click", colorchange_red);

function colorchange_red () {
  color = "red";
}

var yellow = document.querySelector(".yellow")

yellow.addEventListener("click", colorchange_yellow);

function colorchange_yellow () {
  color = "yellow";
}

var orange = document.querySelector(".orange")

orange.addEventListener("click", colorchange_orange);

function colorchange_orange () {
  color = "orange";
}

var purple = document.querySelector(".purple")

purple.addEventListener("click", colorchange_purple);

function colorchange_purple () {
  color = "purple";
}

var green = document.querySelector(".green")

green.addEventListener("click", colorchange_green);

function colorchange_green () {
  color = "green";
}

var gray = document.querySelector(".gray")

gray.addEventListener("click", colorchange_gray);

function colorchange_gray () {
  color = "gray";
}

var pink = document.querySelector(".pink")

pink.addEventListener("click", colorchange_pink);

function colorchange_pink() {
  color = "pink";
}

var brown = document.querySelector(".brown")

brown.addEventListener("click", colorchange_brown);

function colorchange_brown () {
  color = "brown";
}

var black = document.querySelector(".black")

black.addEventListener("click", colorchange_black);

function colorchange_black () {
  color = "black";
}

var white = document.querySelector(".white")

white.addEventListener("click", colorchange_white);

function colorchange_white () {
  color = "white";
}

//Storleks ändringar

var GetSize;
var Useinput = document.querySelector(".Useinput")

Useinput.addEventListener("click", Change_Size);

function Change_Size () {
  GetSize = document.querySelector(".inputsize").value;
  Size = GetSize;
}

var Small = document.querySelector(".Small")

Small.addEventListener("click", Changesize_Small);

function Changesize_Small () {
  Size = 1;
}

var Medium = document.querySelector(".Medium")

Medium.addEventListener("click", Changesize_Medium);

function Changesize_Medium () {
  Size = 5;
}

var Large = document.querySelector(".Large")

Large.addEventListener("click", Changesize_Large);

function Changesize_Large () {
  Size = 20;
}

// Opacitet ändringar

var GetOpacity;
var Use = document.querySelector(".Use")

Use.addEventListener("click", Change_Opacity);

function Change_Opacity () {
  GetOpacity = document.querySelector(".inputOpacitet").value;
  opacity = GetOpacity / 100;
}

var One = document.querySelector(".One")

One.addEventListener("click", Change_Opacity_One);

function Change_Opacity_One () {
  opacity = 0;
}

var Three = document.querySelector(".Three")

Three.addEventListener("click", Change_Opacity_Three);

function Change_Opacity_Three () {
  opacity = 0.5;
}

var Five = document.querySelector(".Five")

Five.addEventListener("click", Change_Opacity_Five);

function Change_Opacity_Five () {
  opacity = 1;
}

var UndoAll = document.querySelector(".UndoAll")

UndoAll.addEventListener("click", Remove_All);

function Remove_All () {
  context.clearRect(0, 0, canvas.width, canvas.height);
}

var save_image = document.querySelector(".Save_Image");

save_image.addEventListener("click", Save_on_computer);

function Save_on_computer () {
  var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
  window.location.href = image; // it will save locally
}