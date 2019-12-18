var block=document.getElementsByClassName("block");
  var start=document.getElementById("start");
  var stop=document.getElementById("stop");
  var price=9;
  function stochastic()
  {   for(i=0;i<price;i++)
        {
            block[i].style.background= "";
        }
      var nothing=[];
      for(i=0;i<price;i++)
      {
          nothing[i]=i;
      }
      var nothings=[];
      for(i=0;i<3;i++)
      {
          ran=Math.floor(Math.random() * (nothing.length-i));
          nothings.push(nothing[ran]);
          nothing[ran]=nothing[nothing.length-i-1];
          console.log(nothings);
          block[nothings[i]].style.background= cor();
      }
      
  }
  
  
    function cor()
    {   
        var r=Math.floor(Math.random() * 256);
        var g=Math.floor(Math.random() * 256);
        var b=Math.floor(Math.random() * 256);
       
       
        return "rgb("+r+","+g+","+b+")";
    }
   
var timer;
  start.onclick=function()
  {
    stochastic()
    clearInterval(timer);
    timer=setInterval("stochastic()",1000);
  }
  stop.onclick=function()
  {
  
    clearInterval(timer);
    for(i=0;i<price;i++)
        {
            block[i].style.background= "";
        }
  }