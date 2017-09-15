webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var canvName = "gc";
var canv = document.getElementById(canvName);
var ctx = canv.getContext("2d");

// v: velocity, s: snake, a: apple
// gs: grid size, tc: tile count, widht/height = gs * tc
var xv = 1,
    yv = 0,
    sx = 10,
    sy = 10,
    ax = 15,
    ay = 15;
var gs = 20,
    tc = 20;
var trail = [];
var tail = 5;

window.onload = function () {
  document.addEventListener("keydown", keyPush);
  setInterval(game, 1000 / 10);
};

function calcGridSize(elementId) {
  var width = canv.getAttribute("width");
  var height = canv.getAttribute("height");
  return width > height ? parseInt(width / tc) : parseInt(height / tc);
}

function keyPush(evt) {
  switch (evt.keyCode) {
    case 37:
      xv = -1;yv = 0;
      break;
    case 38:
      xv = 0;yv = -1;
      break;
    case 39:
      xv = 1;yv = 0;
      break;
    case 40:
      xv = 0;yv = 1;
      break;
  }
}

function game() {
  // update snake position
  sx += xv;
  sy += yv;
  if (sx < 0) {
    sx = tc - 1;
  }
  if (sx > tc) {
    sx = 0;
  }
  if (sy < 0) {
    sy = tc - 1;
  }
  if (sy > tc) {
    sy = 0;
  }
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canv.width, canv.height);

  ctx.fillStyle = "lime";
  for (var i = 0; i < trail.length; i++) {
    ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 2, gs - 2);
    if (trail[i].x == sx && trail[i].y == sy) {
      tail = 5;
    }
  }
  trail.push({ x: sx, y: sy });
  while (trail.length > tail) {
    trail.shift();
  }

  if (ax == sx && ay == sy) {
    tail++;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
  }
  ctx.fillStyle = "red";
  ctx.fillRect(ax * gs, ay * gs, gs - 2, gs - 2);
}

/***/ })
],[0]);