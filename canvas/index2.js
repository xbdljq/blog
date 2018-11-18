var canvar = document.getElementById("canvas");
var context = canvar.getContext('2d');
var eraser = document.getElementById("eraser");

autoSetCanvasSize(canvar);
listenToMouse(canvar, context);

var eraserEnabled = false;
 //橡皮檫
	eraser.onclick = function() {
  	eraserEnabled = true;
    div1.className = 'div1 x';
  
}
brush.onclick = function(){
  eraserEnabled = false;
  div1.className = 'div1'
}


function listenToMouse(canvar, context) {
  var using = false;
  var lastPoing = {
    x: undefined,
    y: undefined
  }
  

  //鼠标按下事件
  canvar.onmousedown = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    using = true;
    if (eraserEnabled) {
      context.clearRect(x - 5, y - 5, 10, 10)
    } else {
      lastPoing = {
        "x": x,
        "y": y
      }
      drawCircle(x, y, 1);
    }
  }
  //鼠标移动事件
  canvar.onmousemove = function(e) {
    var x = e.clientX;
    var y = e.clientY;
    if (!using) {
      return false
    }
    if (eraserEnabled) {
      context.clearRect(x - 5, y - 5, 10, 10)
    } else {
      using = true;

      var newLastPoing = {
        "x": x,
        "y": y
      }
      drawCircle(x, y, 1);
      drawLine(lastPoing.x, lastPoing.y, newLastPoing.x, newLastPoing.y);
      lastPoing = newLastPoing
    }

  }
  //鼠标松开事件
  canvar.onmouseup = function(e) {
    using = false;
  }
 
}

//画圆
function drawCircle(x, y, radius) {
  context.beginPath();
  context.fillStyle = "blue";
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.fill()
}
//画线
function drawLine(x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "red";
  context.moveTo(x1, y1); //起点
  context.lineWidth = 5;
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath()
}



function autoSetCanvasSize(canvar) {
  setCanvasSize()

  window.onresize = function() {
    setCanvasSize()
  }

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;

    canvar.width = pageWidth;
    canvar.height = pageHeight;
  }
}