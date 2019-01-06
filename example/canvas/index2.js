var canvar = document.getElementById("canvas");
var context = canvar.getContext('2d');
var eraser = document.getElementById("eraser");
var lineWidth = 5;

autoSetCanvasSize(canvar);
listenToMouse(canvar, context);

var eraserEnabled = false;
//橡皮檫
eraser.onclick = function () {
  eraserEnabled = true;
  eraser.classList.add('active')
  brush.classList.remove('active');

}
brush.onclick = function () {
  eraserEnabled = false;
  brush.classList.add('active')
  eraser.classList.remove('active');
}

clear.onclick = function () {
  context.clearRect(0, 0, canvas.width, canvar.height)
}
save.onclick = function () {
  var url = canvas.toDataURL("image/png");
  console.log(url);
  var a = document.createElement('a');
  a.href = url;
  a.download = '我的canvas';
  a.click();
}

red.onclick = function () {
  context.fillStyle = 'red';
  context.strokeStyle = 'red';
  red.classList.add('active');
  green.classList.remove('active');
  blue.classList.remove('active');
}
green.onclick = function () {
  context.fillStyle = 'green';
  context.strokeStyle = 'green';

  green.classList.add('active');
  red.classList.remove('active');
  blue.classList.remove('active');
}
blue.onclick = function () {
  context.fillStyle = 'blue';
  context.strokeStyle = 'blue';

  blue.classList.add('active');
  red.classList.remove('active');
  green.classList.remove('active');
};

thin.onclick = function () {
  lineWidth = 5;
}
thick.onclick = function () {
  lineWidth = 10;
}

function listenToMouse(canvar, context) {
  var using = false;
  var lastPoing = {
    x: undefined,
    y: undefined
  }
  //特性检测
  if (document.body.ontouchstart !== undefined) {
    //触屏设备
    canvar.ontouchstart = function (e) {
      console.log("我要开始触摸了");
      console.log(e)
      //开始触摸了
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
      console.log(x, "," + y)
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
    canvar.ontouchmove = function (e) {
      //边触摸边动
      var x = e.touches[0].clientX;
      var y = e.touches[0].clientY;
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
      console.log(222)
    }
    canvar.ontouchend = function () {
      //触摸完了
      using = false;
      console.log(333)
    }

  } else {
    //非触屏设备
    //鼠标按下事件
    canvar.onmousedown = function (e) {
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
    canvar.onmousemove = function (e) {
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
    canvar.onmouseup = function (e) {
      using = false;
    }

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
  // context.strokeStyle = "red";
  context.moveTo(x1, y1); //起点
  context.lineWidth = lineWidth;
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath()
}



function autoSetCanvasSize(canvar) {
  setCanvasSize()

  window.onresize = function () {
    setCanvasSize()
  }

  function setCanvasSize() {
    var pageWidth = document.documentElement.clientWidth;
    var pageHeight = document.documentElement.clientHeight;

    canvar.width = pageWidth;
    canvar.height = pageHeight;
  }
}