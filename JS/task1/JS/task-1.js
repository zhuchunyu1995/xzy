var block = document.getElementsByClassName("block");
var start = document.getElementById("start");
var stop = document.getElementById("stop");
var price = 9;

function stochastic() {
  for (i = 0; i < price; i++) { //循环清空颜色
    block[i].style.background = "";
  }
  var nothing = []; //生成随机数组
  for (i = 0; i < price; i++) {
    nothing[i] = i;
  }

  var nothings = []; //随机抽3个格子
  for (i = 0; i < 3; i++) {
    ran = Math.floor(Math.random() * (nothing.length - i));
    nothings.push(nothing[ran]);
    nothing[ran] = nothing[nothing.length - i - 1];
    console.log(nothings);
  }
  var to=col();
  block[nothings[0]].style.background = col()[0];
  block[nothings[1]].style.background = col()[1];
  block[nothings[2]].style.background = col()[2];
}


function col() {
  var colors = [];
  if (colors[0] === colors[1] && colors[0] === colors[2] && colors[1] === colors[2]) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    colors.push("rgb(" + r + "," + g + "," + b + ")");
  }
  for (i = 0; i < 3; i++) {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    colors.push("rgb(" + r + "," + g + "," + b + ")");
  }
  return colors;
}


var timer;
start.onclick = function () {
  stochastic()
  clearInterval(timer);
  timer = setInterval("stochastic()", 1000);
}
stop.onclick = function () {

  clearInterval(timer);
  for (i = 0; i < price; i++) {
    block[i].style.background = "";
  }
}