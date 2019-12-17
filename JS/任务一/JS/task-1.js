var block = document.getElementsByClassName("block");
var group = 9;

function array() {
  var num = [];
  for (i = 0; i < group; i++) {
    num[i] = i;
  }
  var empty = [];
  for (i = 0; i < 3; i++) {
    var ran = Math.floor(Math.random() * (num.length - i));
    empty.push(num[ran]);
    num[ran] = num[num.length - i - 1];
    console.log(empty)
  }
  circulation();
  if (empty !== num) {
    block[empty[0]].style.background = blockColor();
    block[empty[1]].style.background = blockColor();
    block[empty[2]].style.background = blockColor();
  }

}



function circulation() //循环赋值
{
    for (i = 0; i < group; i++) {
        block[i].style.background = "#ffa500";
    }
}

function blockColor()
{

var r=Math.floor(Math.random() * 256);
var g=Math.floor(Math.random() * 256);
var b=Math.floor(Math.random() * 256);
return "rgb(" + r + "," + g +"," + b +")"; 

}


var open="of";


function start() {
  if(open === "of")
  {
      opens=setInterval(function () {
      array()
  }, 1000);
  }
  open = "on";
}


function stop() {
  clearInterval(opens);
  circulation()
  open = "of";
}

  
       
           
               
            
       
